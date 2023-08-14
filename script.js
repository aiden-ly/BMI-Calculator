function reload() {
  window.location.reload();
}

function calculate() {
  let height = document.getElementById('height').value;
  let weight = document.getElementById('weight').value;
  let age = document.getElementById('age').value;
  let activity = parseFloat(document.getElementById('activity').value);
  let sex = '';
  try {
    sex = document.querySelector('input[name="sex"]:checked').value;
  }
  catch (error) {
    alert("Error: Sex not selected.");
    return;
  }
  
  if (age === '' || age <= 0 || age > 100 || isNaN(age)) {
    alert("Error: Invalid age! Make sure it is a number between 0 and 100.");
    return;
  }

  if (height === '' || height <= 0 || isNaN(height)) {
    alert("Error: Invalid height! Make sure it is a number above 0.");
    return;
  }

  if (weight === '' || weight <= 0 || isNaN(weight)) {
    alert("Error: Invalid weight! Make sure it is a number above 0.");
    return;
  }

  height = parseFloat(height) / 100;
  weight = parseFloat(weight);
  age = parseInt(age);
  activity = parseFloat(activity);

  equation(height, weight, sex, activity, age);
  

  document.getElementsByClassName('interactive')[0].style.opacity = '0';
  document.getElementsByClassName('interactive')[0].style.pointerEvents = 'none';
  
  document.getElementsByClassName('result')[0].style.opacity = '1';
  document.getElementsByClassName('result')[0].style.pointerEvents = 'auto';
}

function equation(height, weight, sex, activity, age) {
  var bmi = (weight) / (height**2);
  bmi = Math.round(bmi * 10) / 10;
  var classification = '';
  var amr = 0;
  var advice = '';
  
  if (sex === 'Male') { /* Using the Mifflin-St Jeor Equation */
    amr = Math.round(((10 * weight) + (625 * height) - (5 * age) + 5) * activity);
  }
  else if (sex === 'Female') {
    amr = Math.round(((10 * weight) + (625 * height) - (5 * age) - 161) * activity);
  }

  if (bmi <= 16) {
    classification = 'severely underweight';
    advice = `it is recommeneded that you eat in a surplus to gain weight. You would need ${amr+500} calories to gain a pound per week. Please consult your doctor for advice, as your health may be at risk. Try incorporating high-calorie dense food like avocado, fatty meats, and nuts if you struggle eating enough.`
  }
  else if (bmi > 16 && bmi < 18.5) {
    classification = 'underweight';
    advice = `it is recommeneded that you eat in a surplus to gain weight. You would need ${amr+500} calories to gain a pound per week. Overall, you should make sure you get adequate exercise, eat healthy, and eat more! Try incorporating high-calorie dense food like avocado, fatty meats, and nuts if you struggle eating enough.`;
  }
  else if (bmi >= 18.5 && bmi < 25) {
    classification = 'healthy';
    advice = `if you have a certain weight goal, you can eat ${amr-500} calories to lose a pound per week or ${amr+500} calories to gain a pound per week. Overall, you should make sure you get adequate exercise and eat healthy to keep this up!`;
  }
  else if (bmi >= 25 && bmi < 30) {
    classification = 'overweight';
    advice = `it is recommeneded that you eat in a deficit to lose weight. You would need ${amr-500} calories to lose a pound per week. Overall, you should make sure you get adequate exercise and eat healthy! Try eating more low-calorie foods like watermelon, vegetables, and yogurt while drinking lots of water, in order to keep yourself from feeling hungry. Please consult your doctor before starting any diets.`;
  }
  else if (bmi >= 30 && bmi <= 40) {
    classification = 'obese';
    advice = `it is recommeneded that you eat in a deficit to lose weight. You would need ${amr-500} calories to lose a pound per week. Please consult your doctor for advice, as your health may be at risk. Try eating more low-calorie foods like watermelon, vegetables, and yogurt while drinking lots of water, in order to keep yourself from feeling hungry. Remember, BMI does not take your muscle mass and body fat into account, so this advice may not apply if you have low fat.`;
  }
  else if (bmi > 40) {
    classification = 'severely overweight';
    advice = `it is recommeneded that you eat in a deficit to lose weight. You would need ${amr-500} calories to lose a pound per week. Please consult your doctor for advice as soon as possible, as your health may be  severely at risk. Try eating more low-calorie foods like watermelon, vegetables, and yogurt while drinking lots of water, in order to keep yourself from feeling hungry. Remember, BMI does not take your muscle mass and body fat into account, so this advice may not apply if you have low fat.`;
  }

  document.getElementById("resulttext").innerHTML = `Your BMI is ${bmi}. That is considered ${classification}. To maintain your weight, you would need to eat ${amr} calories, but ${advice}`;
 
}





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

  

  document.getElementsByClassName('interactive')[0].style.opacity = '0';
  document.getElementsByClassName('interactive')[0].style.pointerEvents = 'none';
  
  document.getElementsByClassName('result')[0].style.opacity = '1';
  document.getElementsByClassName('result')[0].style.pointerEvents = 'auto';
  
  console.log(height, weight, sex, activity, age)
  
}


function clear() {
  return;
}



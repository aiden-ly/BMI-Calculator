function calculate() {
  let height = document.getElementById('height').value;
  let weight = document.getElementById('weight').value;
  let sex = '';
  try {
    sex = document.querySelector('input[name="sex"]:checked').value;
  }
  catch (error) {
    alert("Error: Sex not selected.");
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

  document.getElementsByClassName('interactive')[0].style.visibility = 'hidden';
  
  console.log(height, weight, sex)
  
}

function bmi_equation() {
  return;
}

function clear() {
  return;
}



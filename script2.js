 window.onload = function () {
    const storedData = localStorage.getItem("myData");
    if (storedData) {
      document.getElementById("show").innerHTML = storedData;
    }
  };

  function addData() {
    const val1 = document.getElementById("input1").value.trim();
    const val2 = document.getElementById("input2").value.trim();

    if (val1 && val2) {
      const combined = `${val1} ${val2}`;
      localStorage.setItem("myData", combined);
      document.getElementById("show").innerHTML = combined;
      document.getElementById("input1").value = "";
      document.getElementById("input2").value = "";
    } else {
      alert("Both fields are required!");
    }
  }

  function editData() {
    const currentData = localStorage.getItem("myData");
    if (!currentData) {
      alert("Nothing to edit yet!");
      return;
    }

    const newData = prompt("Edit your data:", currentData);
    if (newData !== null) {
      localStorage.setItem("myData", newData);
      document.getElementById("show").innerHTML = newData;
    }
  }
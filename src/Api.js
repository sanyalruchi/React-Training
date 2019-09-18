export const fetchData = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e, "error");
  }
};

export const updateData = async userData => {
  try {
    const response = await fetch("https://reqres.in/api/users/2", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userData)
    });
    const responseJson = await response.json();
    alert("data updated successfully");
    return responseJson;
  } catch (e) {
    console.log(e, "error");
  }
};

export const addUserData = async userData => {
  try {
    const response = await fetch("https://reqres.in/api/users/2", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userData)
    });
    const responseJson = await response.json();
    alert("data added successfully");
    return responseJson;
  } catch (e) {
    console.log(e, "error");
  }
};

export const deleteUser = async id => {
  try {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    const responseJson = await response.json();
    alert("data deleted successfully");
    return responseJson;
  } catch (e) {
    console.log(e, "error");
  }
};

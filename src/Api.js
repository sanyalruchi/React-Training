export const fetchData = async () => {
  console.log("inside api");
  try {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const data = await response.json();
    console.log(data, "in fetchData api");
    return data;
  } catch (e) {
    console.log(e, "error");
  }
};

export const updateData = async userData => {
  console.log(userData, "updated data in api");
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
  
  console.log(userData, "updated data in add api");
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
    console.log(e,"error");
  }
} ;

// function to check if local storage is supported by browser

function isLocalStorageSupported() {
    try {
        const testKey = "__test__";
        localStorage.setItem(testKey, testKey)
        localStorage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
}

// isLocalStorageSupported();
// console.log(isLocalStorageSupported());

// JSON - JavaScript Object Notation

/* {
    "name": "John Doe",
    "age": 30,
    "email": "john.doe@gmail.com",
    "hobbies": ["reading", "hiking", "photography"]
} */

// store data
function storeData(key, value) {
    localStorage.setItem(key, value);
    console.log(`Data store successfully: ${key} - ${value}`);
}

storeData();
storeData("000001", "Bernard");

// retrieve data
function retrieveData(key) {
    const data = localStorage.getItem(key);
    console.log(`Retrieved data for key ${key}:`, data);
    return data;
}

console.log(retrieveData());
console.log(retrieveData("000001"));

// remove data
function removeData(key) {
    localStorage.removeItem(key);
    console.log(`Data removed for key: ${key}`);
}

console.log(removeData());

// example usage
storeData("000002", "john_doe");
retrieveData("000002");
removeData("000002");

//with stringify and parse
//store data
function storeData2(key, value) {
    if (!isLocalStorageSupported()){
        console.log("ERROR: Local storage is not supported in this browser");
        return;
    }
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
    console.log(`Data stored successfully: ${key} - ${serializedValue}`);
}

console.log(storeData2("age", 30));

// retrieve data
function retrieveData2(key) {
    if (!isLocalStorageSupported()){
        console.log("ERROR: Local storage is not supported in this browser");
        return;
    }
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null){
        console.log(`ERROR: No data found for key: ${key}`);
        return null;
    }
    const value = JSON.parse(serializedValue);
    console.log(`Retrieved data for key ${key} -`, value);
    return value;
}

retrieveData2("age");
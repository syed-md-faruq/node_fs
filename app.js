const fs = require('fs').promises

//Reading a file
async function read_file(filepath) {
  try {
    const data = await fs.readFile(filepath);
    console.log(data.toString());
  } catch (error) {
    console.error(`error while trying to read : ${error.message}`);
  }
}
//read_file("test.txt")

//overwrite a file if exists else create new and add data 
async function overwrite(filepath, data) {
  try {
    await fs.writeFile(filepath, data);
  } catch (error) {
    console.error(`error while trying to write ; ${error.message}`);
  }
}
//overwrite("file1.txt", 'new data')

//appending to a file
async function write_append(filepath,data) {
  try {
    await fs.writeFile(filepath, data, { flag: 'a' });
  } catch (error) {
    console.error(`error while trying to write : ${error.message}`);
  }
}
//write_append("file1.txt", ' appending new data')

//deleting file
async function delete_file(filepath) {
  try {
    await fs.unlink(filepath);
    console.log("Deleted");
  } catch (error) {
    console.error(`error while trying to delete : ${error.message}`);
  }
}
//delete_file("file1.txt");

//creating file
async function create_file(filepath) {
  try {
    await fs.open(filepath, 'w')
    console.log("Created");
  } catch (error) {
    console.error(`error while trying to create : ${error.message}`);
  }
}
//create_file("file1.txt")


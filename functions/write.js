module.exports = {
  write:function (file,data) {
    console.log("output: " + JSON.stringify(data,null,' '));
    fs.write(file,JSON.stringify(data,null,' '),'w');
  }
};

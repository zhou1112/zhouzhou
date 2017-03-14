import axios from 'axios';

function getWorkCard(){
  let address = `https://raw.githubusercontent.com/zhou1112/zhoudata/master/WorkCard.json?${Math.random()}`
  return axios.get(address)
    .then((res) => (
      { getData:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}

function getBlogCard(){
  let address = `https://raw.githubusercontent.com/zhou1112/zhoudata/master/BlogCard.json?${Math.random()}`
  return axios.get(address)
    .then((res) => (
      { getData:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}

function getBlogMd(add){
  let address = `https://raw.githubusercontent.com/zhou1112/zhoudata/master/Blog/${add}.md`
  return axios.get(address)
    .then((res) => (
      { getData:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}

function getWorkMd(add){
  let address = `https://raw.githubusercontent.com/zhou1112/zhoudata/master/Work/${add}.md`
  return axios.get(address)
    .then((res) => (
      { getData:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}

function searchGit(userName){
  let address = `https://api.github.com/users/${userName}`
  return axios.get(address)
    .then((res) => (
      { getData:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}

export {getWorkCard,getBlogCard,getBlogMd,getWorkMd,searchGit};

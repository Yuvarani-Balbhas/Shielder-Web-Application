import axios from 'axios'; 

export const fetchdataget = async url => {
  const res = await axios.get(url);
  return res.data;
};

export const postdata = async (url, form) => {
  console.log("url"+url)
  return await axios.post(url, form);
};

export const getdataObject = async url => {
  console.log("url"+url)
  const res = await axios.get(url);
  console.log('Get Response for '+ url + '--->' + JSON.stringify(res));
  return res;
};
export const getSecureData = async (url, bearer) => {
  const res = await axios.get(url, {'headers' :{'Authorization': bearer}});
  return res.data;
};
export const postSecureObject = async (url, form, bearer) => {
  return await axios.post(url, form, {'headers' :{'Authorization': bearer}});
};

export const postdatafile = async (url,form) => {
  console.log("url"+url+"\n"+JSON.stringify(form))
  const res = await axios({
    url:url,
    method:"POST",
    data:form,
  });
  console.log('Get Response for '+ url + '--->' + JSON.stringify(res));
  return res;
};
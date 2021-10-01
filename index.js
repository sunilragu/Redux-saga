export const fetchNews =async ()=> {

  const response = await fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc');
  return await response.json();
 
}
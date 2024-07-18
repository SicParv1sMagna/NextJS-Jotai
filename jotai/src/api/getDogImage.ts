export const getDogImagePhoto = async (placeOfCall: string) => {
  const response = await fetch('https://api.thedogapi.com/v1/images/search', {
    headers: {
      "x-api-key": "live_8z7SOIpCHjvNbn4AyBVez1ofzDtdksB4lyoNT9MsCndhgVq63sJ55cBnJEelXuBA"
    }
  });

  const { url } = (await response.json())[0]

  console.log("*** Response:", url, "***", "from:", placeOfCall, "***");

  return {
    message: url
  }
}
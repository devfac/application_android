const DataAPI = async () => {
    try {
      let data = await fetch(
        "https://sheets.googleapis.com/v4/spreadsheets/17xyxdXwmLdB7HnAvz9M2j12mCBW7aX9Js7rfGb-WcsY/values/user?valueRenderOption=FORMATTED_VALUE&key=AIzaSyApLEhMGRcg65yEvIOtjc6DD3zSk-EZVFM"
      );
      let { values } = await data.json();
      let [, ...Data] = values.map((data) => data);
      return Data;
    } catch {
      console.log("Error");
    }
  };
  export default DataAPI;
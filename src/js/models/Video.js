export default class Video {
  constructor(dummyObject) {
    this.fetchedVideos = dummyObject;
  }

  async fetchYoutubeApi(query, nextPageToken) {
    // const nextPageToken = 'CAoQAA';
    // const query = '우아한테크코스';
    // 마르코 API 서버 주소: https://priceless-euclid-bf53ed.netlify.app
    // 마르코 API 서버2 주소: https://zealous-swartz-f699df.netlify.app/
    // 위니 API 서버 주소: https://thirsty-ritchie-0c8419.netlify.app

    try {
      // const ORIGINAL_HOST = "https://www.googleapis.com"; // 기존 유튜브 API 호스트
      const REDIRECT_SERVER_HOST = 'https://zealous-swartz-f699df.netlify.app/'; // my own redirect server hostname

      const url = new URL('youtube/v3/search', REDIRECT_SERVER_HOST);
      const parameters = new URLSearchParams({
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        regionCode: 'kr',
        safeSearch: 'strict',
        pageToken: nextPageToken || '',
        q: query,
      });
      url.search = parameters.toString();

      const response = await fetch(url, { method: 'GET' });
      const body = await response.json();

      if (!response.ok) {
        throw new Error(body.error.message);
      }
      this.fetchedVideos = body;
    } catch (error) {
      console.error(error);
    }
  }
}

import axios from 'axios';

export default {
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    axios.get('https://api.example.com/posts')
      .then(response => {
        this.posts = response.data;
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }
}

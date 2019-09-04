export default {
    fetchPosts(subreddit) {
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json => json.data.children.map(x => x.data));
    }
};
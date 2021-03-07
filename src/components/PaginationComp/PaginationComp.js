import axios from "axios";

export default {
    name: "PaginationComp",
    data() {
        return {
            // indicates the number of posts per page.
            limit: 5,
            // indicates the current page number
            page: 1,
            listData: [],
        }
    },

    async mounted() {
        await this.loadData(this.limit, this.page);
    },

    methods: {
        loadData(limit, page) {
            return axios.get(`http://js-post-api.herokuapp.com/api/posts?_limit=${limit}&_page=${page}`)
                .then((response) => {
                    let data = response.data;
                    this.listData = data.data;
                })
                .catch(error => console.log(error));
        },
        _onClickSwitchPage(pageNumb) {
            // set page when click event
            this.page = pageNumb;
            this.loadData(this.limit, pageNumb)
                .then();
        }
    }
};

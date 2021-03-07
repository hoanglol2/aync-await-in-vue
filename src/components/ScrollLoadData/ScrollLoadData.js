import axios from "axios";

export default {
    name: "ScrollLoadData",
    data() {
        return {
            // cases: null,
            // recordToShows: 3,
            // totalRecord: 0,
            // currentData: [],
            // animate: false,

            //    ---------------------
            records: [],
            limit: 5,
            page: 1,
            animate: false,
        };
    },
    async created() {
        // await this.loadMore();
        // this.renderRecord(this.recordToShows);
        // this.totalRecord = this.cases.length;

        //    ---------------------------
        await this.loadMore(this.limit, this.page);
    },
    methods: {
        //
        // loadMore() {
        //     return axios.get("https://5fe01c7deca1780017a311db.mockapi.io/nameEntity") // has 10 items.
        //         .then(res => {
        //             this.cases = res.data;
        //         });
        // },
        // renderRecord(record) {
        //     this.currentData = this.cases.slice(0, record);
        // },
        // _onLoadMore(numb) {
        //     // when click animate then active
        //     this.animate = true;
        //
        //     setTimeout(() => {
        //         // after load record animate not active.
        //         this.animate = false;
        //
        //         this.recordToShows += numb;
        //         this.renderRecord(this.recordToShows);
        //     }, 1000);
        // },

        //   ---------------------
        loadMore(limit, page) {
            return axios.get(`http://js-post-api.herokuapp.com/api/posts?_limit=${limit}&_page=${page}`)
                .then((response) => {
                    this.records = response.data.data;
                })
                .catch((error) => console.log(error));
        },
        _onClickPageChange(number) {
            this.animate = true;
            this.limit += number;

            this.loadMore(this.limit, this.page)
                .then(() => this.animate = false);
        }
    },
};

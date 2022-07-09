Page({
  data: {
    show1: false,
    // isLoading: false,
    // user: {},
    // numOrders: {},
  },
  dummyFunction(){}
  ,
  handleOnTap(e) {
    this.setData({
      // ...data,
      show1: true,
    });
  },

  handleOnCloseBottomSheet() {
    this.setData({
      show1:false
    })
  },
  onCustomIconEvent(e) {
    // my.navigateTo({ url: 'pages/cart/index' });
  },

  async loadData() {
    // this.setData({
    //   isLoading: true,
    // });
    // try {
    //   const [user, numOrders] = await Promise.all([
    //     getUserInfo(),
    //     getNumOrders(),
    //   ]);
    //   this.setData({
    //     user,
    //     numOrders,
    //     isLoading: false,
    //   });
    // } catch (error) {
    //   this.setData({
    //     isLoading: false,
    //   });
    // }
  },
  // Life cycle
  onShow() {
    // loadBadgeCart('/assets/images/ic-cart-account.png');
  },

  onReady() {
    // this.loadData();
  },
  // methods: {
  //   handleOnTap(event) {
  //   // show1 = true;
  //   // console.log(show1);
  //   console.log('avc');
  //   console.log(event);
  //   },

  //   handleOnCloseBottomSheet() {
  //     // show1 = false;
  //     // console.log(show1);
  //     console.log('abc');
  //   }
  // }
});


// Page({
// 	onLoad(query) {
// 	},
// 	onReady() {
// 	},
// 	onShow() {
// 	},
// 	onHide() {
// 	},
// 	onUnload() {
// 	}
// });
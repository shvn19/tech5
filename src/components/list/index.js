Component({
  data: {},
  methods: {
    handleOnTap(e) {
      my.alert({
        title: 'Alert title',
        content: e.target.dataset.url,
        buttonText: 'Alert Button',
        success: () => {
          console.log('Success');
        },
        fail: () => {
          console.log('Fail');
        },
        complete: () => {
          console.log('Complete');
        }
      });
      console.log(e.target.dataset.url);
      my.navigateTo({url : e.target.dataset.url});
      
    }
  }
})

// Component({
//   data: {},
//   methods: {
//     onOpenPage(e) {
//       if (e.target.dataset.url) {
//         getApp().currentPage = e.target.dataset.url;
//         my.navigateTo({
//           url: e.target.dataset.url,
//         });
//       }
//     },
//   },
// });
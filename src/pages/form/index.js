let years = []
for (let index = 1900; index <=2022; index++) {
  years.push(`Năm ${index}`)
}

let months = []
for (let index = 1; index <= 12; index++) {
  months.push(`Tháng ${index}`)
}

let days = []
for (let index = 1; index <= 31; index++) {
  days.push(`Ngày ${index}`)
}

Page({
  data: {
    items1: ['Nam', 'Nữ'],
    item1: 'Nam',
    item2: null,
    show: false,
    name: "",
    address: "",
    identity: "",
    relation: "",
    name2: "",
    day: "",
    month: "",
    year: "",
    gender: "Nam",
    ethnic: "",
    nation: "",
    address2: "",
    identity2: "",
    status: "",
    purpose: "",
  },
  onInputName(e) {
    this.setData({name: e.detail.value});
  },
  onInputAddress(e) {
    this.setData({address: e.detail.value});
  },
  onInputIdentity(e) {
    this.setData({identity: e.detail.value});
  },
  onInputRelation(e) {
    this.setData({relation: e.detail.value});
  },
  onInputName2(e) {
    this.setData({name2: e.detail.value});
  },
  onChangeDay(e) {
    let value = e.detail.value;
    this.setData({
      day: days[value[0]],
      month: months[value[1]],
      year: years[value[2]]
    })
  },
  onSelectGender(item1) {
    this.setData({ gender: item1 });
  },
  onInputEthnic(e) {
    this.setData({ ethnic: e.detail.value });
  },
  onInputNation(e) {
    this.setData({ nation: e.detail.value });
  },
  onInputAddress2(e) {
    this.setData({ address2: e.detail.value });
  },
  onInputIdentity2(e) {
    this.setData({ identity2: e.detail.value });
  },
  onInputStatus(e) {
    this.setData({ status: e.detail.value });
  },
  onInputPurpose(e) {
    this.setData({purpose: e.detail.value});
    console.log("data", this.data);
  },
  onTapSubmit() {
    
  },
  onSelect2(item2) {
    this.setData({ item2 });
  },
  onShowBottomSheet(e) {
    this.setData({
      show: true,
      template: e.target.dataset.template,
    });
  },
  onCloseBottomSheet() {
    this.setData({
      show: false,
    });
  },
  onClickBottomSheet(e) {
    console.log("onClickBottomSheet", e);
    const template = e.target.dataset.template;
    // my.alert({
    //   title: "click",
    //   content: `Receive click from bottom sheet with ${template}`,
    // });
  },
  // Tình trạng hôn nhân
  onActionSheet() {
    if (my.canIUse("showActionSheet")) {
      my.showActionSheet({
        title: "Tình trạng hôn nhân",
        items: ["Bạn là công dân Việt Nam cư trú ở trong nước", 
        "Bạn là công dân Việt Nam đang cư trú ở nước ngoài",
        "Bạn là người đang có vợ/chồng yêu cầu xác nhận tình trạng hôn nhân trong thời gian trước khi đăng ký kết hôn", 
        ],
        // destructiveBtnIndex: 0,
        success: (res) => {
          let btn = "";
          if(res.index === 0)
            btn = "Ghi rõ tình trạng hôn nhân hiện tại: đang có vợ hoặc có chồng; hoặc chưa đăng ký kết hôn với ai; hoặc đã đăng ký kết hôn/đã có vợ hoặc chồng, nhưng đã ly hôn hoặc người kia đã chết";
          else if(res.index === 1)
            btn = "Ghi rõ: Trong thời gian từ ngày…tháng….năm….đến ngày….tháng…..năm….chưa đăng ký kết hôn với ai; hoặc hiện tại đang có vợ/chồng là bà/ông… (Giấy chứng nhận kết hôn số …, do … cấp ngày…tháng…năm).";
          // else if(res.index === 2)
          //   btn = "m trước khi xuất cảnh; người đã qua nhiều nơi thường trú khác nhau đề nghị xác nhận tình trạng hôn nhân tại nơi thường trú trước đây thì khai về tình trạng hôn nhân của mình trong thời gian đã thường trú tại nơi đó (Ví dụ: Không đăng ký kết hôn với ai trong thời gian cư trú tại ............................................, từ ngày...... tháng ..... năm ......... đến ngày ........ tháng ....... năm ........).";
          else if(res.index === 2)
            btn = "Ghi rõ tình trạng hôn nhân của mình trong thời gian cư trú tại nước đó (Ví dụ: trong thời gian cư trú tại CHLB Đức từ ngày ....... tháng ..... năm ....... đến ngày ........ tháng ....... năm ........ không đăng ký kết hôn với ai tại Đại sứ quán Việt Nam tại CHLB Đức).";
          else 
            btn = "Vui lòng chọn đúng đối tượng để được hỗ trợ gợi ý";
          my.alert({
            title: `${btn}`,
          });
        },
      });
    }
  },
  // Handle Alert
  onAddress() {
    my.alert({
        title: "Nơi cư trú",
        content: "Trường hợp công dân Việt Nam cư trú trong nước thì ghi theo nơi đăng ký thường trú, nếu không có nơi đăng ký thường trú thì ghi theo nơi đăng ký tạm trú.\nTrường hợp công dân Việt Nam cư trú ở nước ngoài thì ghi theo nơi thường trú hoặc tạm trú ở nước ngoài",
        buttonText: "Đóng"
    });
  },
  onSubmit(e) {
    console.log("onSubmit", e);
    my.alert({
      content: `Form value：${JSON.stringify(e.detail.value)}`,
    });
  },
  onReset(e) {
    console.log("onReset", e);
  },
});

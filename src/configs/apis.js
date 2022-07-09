const questions = [
  {
    id: "qs1",
    question: "Bạn là cư dân Việt Nam phải không?",
    labelYes: "phải",
    labelNo: "không"
  },
  {
    id: "qs2",
    question: "Bạn là cư dân Việt Nam phải không?",
    labelYes: "phải",
    labelNo: "không"
  },
  {
    id: "qs3",
    question: "Bạn là cư dân Việt Nam phải không?",
    labelYes: "phải",
    labelNo: "không"
  },
]

const populars = [
  {
    name: "Đăng kí hôn nhân",
    path: "page/dkhn/index",
    color: "#3255a8",
  },
  {
    name: "Đăng kí thường trú",
    path: "page/dkhn/index",
    color: "#3273a8",
  },
  {
    name: "Thủ tục hành chính đất đai",
    path: "page/dkhn/index",
    color: "#3292a8",
  },
];

const categories =[
  {
    name: 'Theo đối tượng quản lý của Nhà nước',
    components: [
      {
        name: 'Thủ tục đăng ký kết hôn',
        path: 'pages/home/index',
      },
      {
        name: 'Thủ tục đăng ký kinh doanh',
        path: '1',
      },
      {
        name: 'Thủ tục cấp Giấy chứng nhận quyền sử dụng đất',
        path: '1',
      },
      {
        name: 'Thủ tục làm hộ chiếu',
        path: '1',
      },
      {
        name: 'Thủ tục cấp Giấy phép xây dựng',
        path: '1',
      },
      {
        name: 'Thủ tục hộ khẩu',
        path: '1',
      }
    ],
  },
  {
    name: 'Theo công việc của cơ quan Nhà nước',
    components: [
      {
        name: 'Thủ tục thông qua và ban hành văn bản hành chính',
        path: '1',
      },
      {
        name: 'Thủ tục thông qua quyết định hành chính',
        path: '1',
      },
      {
        name: 'Thủ tục tuyển dụng cán bộ, công chức',
        path: '1',
      },
      {
        name: 'Thủ tục khen thưởng, kỷ luật cán bộ, công chức',
        path: '1',
      }
    ],
  },
  {
    name: 'Theo chức năng chuyên môn, nghề nghiệp',
    components: [
      {
        name: 'Thủ tục thuế, phí, lệ phí',
        path: '1',
      },
      {
        name: 'Thủ tục cung cấp thông tin',
        path: '1',
      },
      {
        name: 'Thủ tục hải quan',
        path: '1',
      },
      {
        name: 'Thủ tục kiểm tra phòng cháy chữa cháy',
        path: '1',
      },
      {
        name: 'Thủ tục kiểm tra an toàn lao động',
        path: '1',
      }
    ],
  },
  {
    name: 'Theo mối quan hệ công việc',
    components: [
      {
        name: 'Thủ tục ban hành quyết định quy phạm',
        path: '1',
      },
      {
        name: 'Thủ tục ban hành quyết định nội bộ cá biệt',
        path: '1',
      },
      {
        name: 'Thủ tục bổ nhiệm cán bộ',
        path: '1',
      }
    ],
  }
];

const flatten = (arr) => arr.reduce((rs, item) => rs.concat(item.components), []);
const flattenAdministrativeProcedures = [...flatten(categories)];

export { questions, populars, categories, flattenAdministrativeProcedures }
// data/projectsIntroduce.js

export const projects = [
  // =========================================================
  // 송성준 Semi Project
  // HappyGivers
  // =========================================================
  {
    title: "HappyGivers · 기부 플랫폼",

    period: "2025.06 – 2025.07",

    type: "JSP & Servlet",

    desc:
      "후원기관과 기부 참여자를 연결하고 회원·기관 승인·이메일 인증 흐름을 제공하는 JSP/Servlet 기반 기부 플랫폼",

    role:
      "회원 도메인 중심 풀스택 개발 - 약관 동의, 일반/기관 회원가입, 로그인·자동로그인, 이메일 인증·재인증, 계정 찾기, 마이페이지·프로필 수정, 기관회원 승인 관리",

    category: "JSP/Servlet",

    // 대표 이미지
    image: "/images/projects/happygivers/happygivers-main.png",

    // 상세 페이지 이미지 - 기능 흐름이 보이도록 순서 구성
    imageDetail: "/images/projects/happygivers/happygivers-login.png",
    imageDetail2: "/images/projects/happygivers/happygivers-terms.png",
    imageDetail3: "/images/projects/happygivers/happygivers-register-user.png",
    imageDetail4: "/images/projects/happygivers/happygivers-register-org.png",
    imageDetail5: "/images/projects/happygivers/happygivers-email-mail.png",
    imageDetail6: "/images/projects/happygivers/happygivers-email-required.png",
    imageDetail7: "/images/projects/happygivers/happygivers-email-resend.png",
    imageDetail8: "/images/projects/happygivers/happygivers-email-complete.png",
    imageDetail9: "/images/projects/happygivers/happygivers-email-block.png",
    imageDetail10: "/images/projects/happygivers/happygivers-profile-edit.png",
    imageDetail11: "/images/projects/happygivers/happygivers-profile-image.png",
    imageDetail12: "/images/projects/happygivers/happygivers-org-approval.png",
    imageDetail13: "/images/projects/happygivers/happygivers-org-history.png",
    imageDetail14: "/images/projects/happygivers/happygivers-admin-dashboard.png",

    detailedInfo: {
      overview:
        "HappyGivers는 기부가 필요한 후원처와 참여를 원하는 사용자를 연결하는 웹 플랫폼입니다. 팀 프로젝트에서 회원 영역을 중심으로 가입 전 약관 동의, 일반회원과 기관회원의 가입 분기, 로그인과 자동로그인, 이메일 인증 및 재인증, 계정 찾기, 마이페이지 회원정보·프로필 관리와 기관회원 승인 관리 흐름을 구현했습니다.",

      keyPoints: [
        "이용약관과 개인정보 수집·이용 필수 동의 후 회원가입 단계로 진행되는 가입 흐름 구현",

        "회원 유형(Mtype)을 기준으로 일반회원(USER)과 기관회원(ORG)의 가입 화면과 처리 로직 분리",

        "기관회원 가입 시 기관명 입력 및 승인 대기 상태로 등록하고 관리자 승인·거절 및 승인 이력 조회 기능 구현",

        "일반회원·기관회원 유형별 로그인과 HttpSession 기반 로그인 상태 관리",

        "UUID 자동로그인 토큰을 Cookie와 DB에 저장하고 Servlet Filter에서 토큰을 검사하여 세션을 복원",

        "회원가입 이메일 인증 메일 발송과 인증 완료 여부를 회원 데이터에 반영",

        "미인증 회원에게 인증 필요 상태를 표시하고 재인증 메일을 다시 요청할 수 있는 흐름 구현",

        "이메일 인증 여부에 따라 일부 회원 기능 접근을 제한하는 처리 구현",

        "이메일과 이름을 활용한 아이디 찾기 및 이메일 인증을 거치는 비밀번호 재설정 흐름 구현",

        "회원 이름·닉네임·전화번호·주소를 수정하고 DB 갱신 후 세션 회원정보를 함께 갱신",

        "프로필 이미지 업로드 후 저장 경로를 회원 데이터에 반영하여 마이페이지에 표시",

        "MyBatis Mapper 인터페이스와 XML SQL을 이용해 회원 조회·등록·수정 및 인증 상태 데이터를 처리"
      ],

      technologies: {
        Java:
          "회원가입, 로그인, 자동로그인, 이메일 인증, 회원정보 수정 등 회원 관련 비즈니스 로직 구현",

        "JSP / Servlet":
          "Servlet Controller와 JSP View를 이용한 MVC 기반 회원 기능 및 관리자 회원관리 화면 구현",

        MyBatis:
          "MemberMapper와 XML Mapper를 이용한 회원 조회·등록·수정, 인증 상태 및 계정 관련 SQL 처리",

        MariaDB:
          "회원정보, 회원유형, 이메일 인증 상태, 자동로그인 토큰 등 관계형 데이터 저장",

        Redis:
          "이메일 인증 과정에서 사용하는 UUID 인증 데이터를 만료시간과 함께 임시 저장",

        HttpSession:
          "로그인 회원 정보를 서버 세션에 저장하고 회원정보 수정 후 세션 데이터를 동기화",

        Cookie:
          "자동로그인 토큰을 브라우저에 저장하여 재접속 시 로그인 상태 복원에 활용",

        "Servlet Filter":
          "요청 처리 전에 자동로그인 쿠키를 확인하고 유효한 토큰이면 사용자 세션을 자동 생성",

        "JavaMail / Mail":
          "회원 이메일 인증 및 비밀번호 재설정 과정에서 인증 메일 발송",

        "Bootstrap 5":
          "회원가입·로그인·마이페이지·관리자 화면의 UI 구성",

        Lombok:
          "Member, AutoLogin 등 도메인 객체의 getter/setter 및 builder 반복 코드 축소"
      },

      challenges: [
        "일반회원과 기관회원의 가입 조건이 달라 Mtype을 기준으로 입력값, 회원 상태, 기관명 저장 로직을 분기",

        "가입 전 필수 약관 동의 여부를 검증하고 동의 정보가 회원가입 흐름과 함께 저장되도록 처리",

        "자동로그인 시 기존 로그인 세션과 자동로그인 쿠키를 구분하고, 유효한 토큰에 대해서만 회원 세션을 새로 생성",

        "이메일 인증 전·후 상태를 DB와 화면에 일관되게 반영하고 미인증 사용자가 재인증할 수 있는 흐름 구성",

        "회원정보 수정 후 DB 값만 변경되어 세션에 이전 정보가 남는 문제를 방지하기 위해 DB 갱신 후 세션의 member 객체도 함께 갱신",

        "회원 가입·인증·수정 기능이 Controller → Service → Mapper → MyBatis XML 계층을 거치면서도 동일한 회원 데이터를 사용하도록 역할과 책임을 분리",

        "기관회원은 가입 즉시 일반회원과 동일하게 활성화하지 않고 승인 대기 상태로 관리한 뒤 관리자 승인·거절 결과를 별도로 기록"
      ],

      outcome:
        "약관 동의부터 일반·기관 회원가입, 로그인·자동로그인, 이메일 인증·재인증, 계정 찾기, 회원정보·프로필 수정, 기관회원 승인까지 이어지는 회원 생명주기 전반을 구현하면서 JSP/Servlet MVC 구조, MyBatis 기반 데이터 접근, 세션·쿠키·Redis를 활용한 인증 흐름을 직접 경험했습니다."
    },

    stack: {
      backend: [
        "Java",
        "JSP",
        "Servlet",
        "MyBatis",
        "MariaDB",
        "Redis"
      ],

      frontend: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap 5",
        "JSP"
      ],

      infra: [
        "Tomcat",
        "AWS EC2"
      ]
    },

    deployment:
      "Tomcat / AWS EC2 (프로젝트 당시 배포, 현재 배포 중단)",

    links: {
      github:
        "https://github.com/songseongjun/happygivers"
    }
  },

    // =========================================================
  // 송성준 Final Project
  // SAYREN
  // =========================================================
  {
    title: "렌탈·구독형 커머스 플랫폼 · SAYREN",

    period: "2025.09 – 2025.10",

    type: "Spring Boot & Next.js",

    desc:
      "일반 구매와 렌탈·구독 상품을 함께 제공하며 상품 선택부터 장바구니, 주문, 배송까지 이어지는 커머스 플랫폼",

    role:
      "요금제(OrderPlan), 장바구니(Cart), 주문(Order), 배송지(Address), 배송·회수(Delivery), 알림(Notification) 담당 - 백엔드 도메인·REST API 구현 및 Next.js 프론트엔드 연동",

    category: "React/Next.js",

    // =========================================================
    // SAYREN 대표 이미지
    // 서비스 전체의 일반 구매 + 렌탈 구독 구조
    // =========================================================
    image: "/images/projects/sayren/sayren-main.jpg",

    // =========================================================
    // SAYREN 상세 이미지
    // 사용자 기능 흐름 순서
    // OrderPlan → Cart → Checkout → Address → Order → Delivery
    // =========================================================

    // 렌탈 12 / 24 / 36개월 요금제 선택
    imageDetail: "/images/projects/sayren/sayren-plan.png",

    // 일반 구매 + 렌탈 상품 통합 장바구니
    imageDetail2: "/images/projects/sayren/sayren-cart.png",

    // 상품·요금제·결제요약·배송지를 연결하는 Checkout
    imageDetail3: "/images/projects/sayren/sayren-checkout.png",

    // 기존 배송지 조회 및 기본 배송지 선택
    imageDetail4: "/images/projects/sayren/sayren-address-list.png",

    // 신규 배송지 등록
    imageDetail5: "/images/projects/sayren/sayren-address-create.png",

    // 주문 생성 완료
    imageDetail6: "/images/projects/sayren/sayren-order-success.png",

    // 관리자 배송·회수 목록 및 상태 변경
    imageDetail7: "/images/projects/sayren/sayren-delivery-admin.png",

    detailedInfo: {
      overview:
        "SAYREN은 일반 구매와 렌탈·구독 방식을 함께 제공하는 커머스 플랫폼입니다. 팀 프로젝트에서 요금제, 장바구니, 주문·주문상품·주문이력, 배송지, 배송·회수, 알림 영역을 담당했습니다. 사용자가 상품별 구매 또는 렌탈 요금제를 선택한 뒤 장바구니 또는 바로구매를 통해 배송지를 지정하고 주문을 생성하는 흐름을 구현했으며, 팀원이 담당한 결제 도메인의 결제 완료 상태를 배송 생성과 연결하고 배송 상태 변경을 알림 흐름까지 연동했습니다.",

      keyPoints: [
        "구매(PURCHASE)와 렌탈(RENTAL) 유형을 OrderPlan으로 분리하고 렌탈 상품의 12·24·36개월 요금제를 상품 선택부터 장바구니와 주문까지 유지",

        "회원·상품·요금제 조합을 기준으로 장바구니 데이터를 관리하고 상품 등록·조회·삭제·전체 비우기 기능 구현",

        "일반 구매 상품과 렌탈 상품이 함께 존재하는 장바구니에서 구매금액, 월 렌탈금액, 보증금을 구분하여 주문 예상 금액을 구성",

        "장바구니 주문과 바로구매 흐름을 분리하고 상품·요금제·배송지 정보를 기반으로 Order와 OrderItem을 생성",

        "주문 시점의 상품 가격을 productPriceSnapshot으로 OrderItem에 저장하여 이후 상품 가격이 변경되어도 기존 주문 가격이 유지되도록 구성",

        "주문 상태와 상태 변경 이력을 OrderHistory로 분리하여 주문의 상태 변화 기록을 관리",

        "회원별 배송지 등록·조회·수정·삭제 및 기본 배송지 설정 기능을 구현하고 Checkout에서 기존 배송지 선택 또는 신규 배송지 등록이 가능하도록 연동",

        "팀원이 담당한 결제 도메인의 PAID 상태 변경 이벤트를 수신하여 주문상품 기준으로 Delivery와 DeliveryItem을 생성하고 초기 배송 상태를 READY로 설정",

        "배송 상태를 READY → SHIPPING → DELIVERED 순서로 관리하고 회수 상태를 RETURN_READY → IN_RETURNING → RETURNED 흐름으로 분리",

        "배송 상태 변경 시 이벤트를 발행하여 다른 도메인과 직접 결합하지 않고 후속 처리와 알림 기능이 연결될 수 있도록 구성",

        "결제·배송·구독 관련 상태 변경 이벤트를 Notification 영역과 연결하여 사용자 알림을 생성하는 이벤트 기반 흐름 구현",

        "Next.js와 TanStack Query를 이용해 장바구니·Checkout·주문·배송지 관련 REST API를 연결하고 Mutation 성공 후 관련 Query 캐시를 갱신"
      ],

      technologies: {
        "Java 21":
          "OrderPlan, Cart, Order, Address, Delivery, Notification 도메인의 비즈니스 로직과 상태 처리 구현",

        "Spring Boot":
          "Controller → Service → Repository/Mapper 계층을 기반으로 장바구니·주문·배송지·배송 REST API 구현",

        "Spring Data JPA":
          "CartItem, Order, OrderItem, OrderHistory, Address, Delivery, DeliveryItem 등 담당 엔티티의 관계 설정과 데이터 영속성 처리",

        MapStruct:
          "Entity와 DTO 간 변환 로직을 Mapper로 분리하여 Controller·Service 계층의 변환 책임을 축소",

        "Spring Security / JWT":
          "JWT 인증 환경에서 로그인 회원을 기준으로 장바구니·주문·배송지 등 회원별 API를 처리하고 인증 요청 흐름과 연동",

        "Spring Event":
          "결제 완료, 배송 상태 변경 등 도메인 이벤트를 이용하여 Payment → Delivery → Notification으로 이어지는 후속 처리를 연결",

        MariaDB:
          "주문·주문상품·주문이력·장바구니·배송지·배송 및 알림 관련 관계형 데이터 저장",

        Redis:
          "프로젝트 공통 JWT Refresh Token 및 인증 인프라와 담당 기능의 인증 요청 흐름을 연동",

        "Next.js 14":
          "장바구니, Checkout, 배송지 선택·등록, 주문 관련 사용자 화면과 관리자 배송 화면 구성",

        React:
          "상품 요금제 선택, 장바구니 조작, 배송지 모달과 주문 처리 등 사용자 인터랙션 구현",

        "TanStack Query":
          "장바구니·주문·배송지 서버 상태 조회와 Mutation 처리 및 성공 후 Query 캐시 무효화",

        Axios:
          "공용 API 클라이언트와 프록시 구조를 통해 Spring Boot REST API 요청 처리",

        "Redux Toolkit":
          "프로젝트 공통 전역 상태 및 Modal 등 공용 UI 상태 관리",

        "Tailwind CSS":
          "장바구니·Checkout·배송지·관리자 배송 관련 화면의 UI 구성"
      },

      challenges: [
        "일반 구매와 렌탈 상품이 동일한 주문 흐름을 사용하면서도 금액 구조가 달라 구매금액·월 렌탈금액·보증금을 각각 구분하고 선택한 OrderPlan이 Cart와 Order까지 유지되도록 데이터 흐름을 구성",

        "상품 가격이 변경될 경우 과거 주문 금액까지 영향을 받는 문제를 방지하기 위해 주문 생성 시점의 가격을 OrderItem의 productPriceSnapshot으로 별도 저장",

        "주문·결제·배송·구독이 서로 다른 팀원의 도메인으로 나뉘어 있어 직접 Service를 강하게 결합하지 않고 상태 변경 이벤트를 기준으로 후속 로직이 실행되도록 연동",

        "결제 성공 이후 배송이 중복 생성되지 않도록 주문상품 기준으로 기존 Delivery 존재 여부를 확인한 뒤 READY 상태의 배송 데이터를 생성",

        "배송과 회수의 상태값이 섞이지 않도록 배송은 READY → SHIPPING → DELIVERED, 회수는 RETURN_READY → IN_RETURNING → RETURNED 흐름으로 분리하여 상태 전환을 관리",

        "인증이 필요한 장바구니·주문 API에서 발생한 401·403 응답을 확인하면서 Access Token과 Refresh Token 재발급 및 Next.js 프록시 요청 흐름을 점검",

        "주문 생성 성공 후 잘못된 값이 전달되어 주문 상세 경로가 undefined가 되는 문제를 확인하고 API 응답의 실제 orderId를 사용하도록 프론트엔드 이동 로직 수정",

        "장바구니 삭제·주문 생성 등 Mutation 이후 화면에 이전 데이터가 남는 문제를 TanStack Query의 Query 무효화 방식으로 처리"
      ],

      outcome:
        "상품별 구매·렌탈 요금제 선택 → 장바구니 또는 바로구매 → 배송지 선택 → 주문 생성 → 결제 완료 이벤트 → 배송 생성 및 상태 변경 → 사용자 알림으로 이어지는 커머스 핵심 흐름을 구현했습니다. 이를 통해 Spring Boot와 JPA 기반 도메인 설계, 주문 시점 데이터 Snapshot 관리, 이벤트 기반 도메인 연동, Next.js·TanStack Query를 이용한 서버 상태 관리와 팀 프로젝트의 도메인 간 협업 방식을 경험했습니다."
    },

    stack: {
      backend: [
        "Java 21",
        "Spring Boot",
        "Spring Data JPA",
        "Spring Security",
        "MapStruct",
        "Spring Event",
        "MariaDB",
        "Redis"
      ],

      frontend: [
        "Next.js 14",
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "TanStack Query",
        "Axios"
      ],

      infra: [
        "AWS EC2",
        "AWS RDS",
        "AWS S3"
      ]
    },

    deployment:
      "AWS EC2 / RDS / S3",

    links: {
      github_back:
        "https://github.com/songseongjun/sayren_back",

      github_front:
        "https://github.com/songseongjun/sayren_front"
    }
  },


       


  // =========================================================
  // 송성준 Individual Java Console Project
  // Q.Q
  // =========================================================
  {
    title: "Q.Q · Java Console 주문 관리 프로그램",

    period: "2025",

    type: "Java Console",

    desc:
      "회원·관리자 권한, 메뉴 조회·검색, 장바구니, 결제, 주문내역과 매출 관리 기능을 콘솔 환경에서 구현한 Java 주문 관리 프로그램",

    role:
      "개인 프로젝트 - 객체 설계부터 회원·메뉴·장바구니·주문·결제·관리자 기능까지 전체 기능 단독 설계·구현",

    category: "Java Console",

    // =========================================================
    // Q.Q 대표 이미지
    // 주문관리프로그램1.png → qq-main.png
    // 회원가입 → 로그인 → 메뉴 진입까지 프로그램의 전체 흐름을 보여주는 대표 화면
    // =========================================================
    image: "/images/projects/qq/qq-main.png",

    // =========================================================
    // Q.Q 상세 이미지
    // =========================================================

    // 가격 범위 메뉴 검색 + 선택 메뉴 가격 합산
    imageDetail: "/images/projects/qq/qq-price-total.png",

    // 장바구니 상품 추가
    imageDetail2: "/images/projects/qq/qq-cart-add.png",

    // 장바구니 상품 수량 감소 / 삭제
    imageDetail3: "/images/projects/qq/qq-cart-remove.png",

    // 주문 총액 계산 + 결제 + 결제내역
    imageDetail4: "/images/projects/qq/qq-payment.png",

    // 회원정보 수정 / 회원 탈퇴 / 탈퇴 후 로그인 차단
    imageDetail5: "/images/projects/qq/qq-account-delete.png",

    detailedInfo: {
      overview:
        "Q.Q는 Java 기본 문법과 객체지향 프로그래밍을 활용하여 직접 설계하고 구현한 콘솔 기반 주문 관리 개인 프로젝트입니다. 회원가입과 로그인부터 메뉴 조회 및 검색, 장바구니 상품 추가·삭제, 결제, 주문내역 조회까지 사용자의 주문 흐름을 구현하고, 관리자에게는 회원·권한·메뉴·매출을 관리할 수 있는 별도의 기능을 구성했습니다.",

      keyPoints: [
        "Admin과 Customer가 공통 User 클래스를 상속하도록 구성하여 회원 유형별 동작을 분리",

        "회원가입 시 이름과 ID 형식을 검증하고 기존 회원 목록을 확인하여 ID 중복 가입을 방지",

        "로그인 성공 사용자를 loginUser로 관리하고 로그인 상태에 따라 관리자와 일반 사용자의 메뉴를 분기",

        "회원정보 수정, 로그아웃, 회원 탈퇴 및 탈퇴 후 기존 계정의 로그인 불가 흐름 구현",

        "메뉴를 메인메뉴·사이드메뉴·주류 카테고리로 구분하고 카테고리와 메뉴 번호를 기준으로 정렬하여 출력",

        "최소 가격과 최대 가격을 입력받아 해당 범위에 포함되는 메뉴만 검색하는 가격 범위 조회 기능 구현",

        "여러 메뉴 번호를 쉼표로 입력받아 각 메뉴의 가격을 조회하고 선택한 메뉴들의 총액을 계산하는 기능 구현",

        "메뉴 번호와 수량을 입력받아 Cart 객체를 생성하고 장바구니에 상품을 추가하는 기능 구현",

        "장바구니에서 특정 메뉴와 수량을 선택해 수량을 감소시키고 수량이 0이 되면 해당 항목을 제거하도록 처리",

        "주문 상품별 가격과 수량을 계산하여 전체 결제 금액을 산출하고 입력된 결제 금액을 검증한 뒤 주문 객체 생성",

        "결제 완료 주문을 주문 목록에 저장하고 사용자별 주문내역을 조회할 수 있도록 구현",

        "관리자 화면에서 전체회원·관리자·일반회원 조회, 관리자 권한 변경, 회원 삭제 기능 구현",

        "관리자 메뉴에서 메뉴 등록·조회·수정·삭제 기능을 제공하도록 CRUD 흐름 구현",

        "주문 날짜를 기준으로 당일·월별·특정일·특정월의 주문 및 매출 내역을 조회할 수 있도록 구현",

        "입력 처리를 QqUtils로 분리하여 문자열 입력, 숫자 변환, Y/N 확인 및 날짜 형식을 공통으로 관리"
      ],

      technologies: {
        Java:
          "회원, 메뉴, 장바구니, 주문과 관리자 기능의 핵심 로직 및 전체 프로그램 흐름 구현",

        "Object-Oriented Programming":
          "User, Admin, Customer, Menu, Cart, Order 객체로 역할을 분리하고 상속과 객체 간 관계를 이용하여 프로그램 구조 설계",

        Inheritance:
          "공통 회원 정보를 User에 정의하고 Admin과 Customer가 이를 상속받아 회원 유형을 구분",

        "Java Collections":
          "ArrayList와 List를 이용해 회원 목록, 메뉴 목록, 장바구니 및 주문내역을 메모리에서 관리",

        "Stream API":
          "회원 목록에서 특정 타입의 회원만 필터링하고 형변환하여 조회하는 기능에 Stream을 활용",

        Generics:
          "getUsers와 findBy 메서드에 제네릭을 적용하여 Admin, Customer, User 타입을 공통 로직으로 조회",

        "Exception Handling":
          "잘못된 숫자 입력, 메뉴 번호·수량·가격 범위 등의 비정상 입력을 예외 처리하여 프로그램 흐름을 제어",

        "Singleton Pattern":
          "UserService, MenuService, OrderService, CustomerService, AdminService를 단일 인스턴스로 관리하여 서비스 상태를 공유",

        "Scanner / Console I/O":
          "콘솔 입력을 기반으로 회원가입, 로그인, 메뉴 선택, 장바구니, 결제 등 사용자 상호작용 구현",

        "SimpleDateFormat / Date":
          "주문 날짜를 기준으로 일별·월별 주문내역과 매출을 조회하기 위한 날짜 형식 처리",

        QqUtils:
          "nextLine, nextInt, nextConfirm과 공통 날짜 형식을 별도 유틸리티 클래스로 분리하여 반복 입력 코드를 최소화"
      },

      challenges: [
        "관리자와 일반 사용자가 서로 다른 기능을 사용해야 하므로 로그인한 User 객체의 실제 타입을 확인하여 관리자 화면과 사용자 화면으로 분기",

        "회원·메뉴·주문 기능을 하나의 클래스에 몰아넣지 않고 UserService, MenuService, OrderService, CustomerService, AdminService로 나누어 기능별 책임을 분리",

        "메뉴 번호, 카테고리, 가격, 장바구니 수량처럼 사용자가 잘못 입력할 수 있는 값에 범위 검증과 예외 처리를 적용",

        "장바구니에서 일부 수량만 취소하는 경우에는 수량을 감소시키고, 수량이 0이 되는 경우에는 Cart 객체 자체를 제거하도록 두 상황을 구분",

        "결제 단계에서 장바구니의 각 상품 가격과 수량을 이용해 총액을 다시 계산하고 입력한 금액과 일치하는 경우에만 주문이 생성되도록 처리",

        "여러 메뉴 번호를 쉼표로 입력받는 기능에서 문자열을 분리한 뒤 숫자로 변환하고 실제 존재하는 메뉴인지 다시 확인하여 합계를 계산",

        "주문내역을 날짜 기준으로 조회하기 위해 주문 객체에 저장된 Date 값을 일 또는 월 단위 문자열 형식으로 변환하여 비교",

        "회원, 메뉴, 장바구니, 주문 목록을 ArrayList로 관리하면서 각 서비스가 동일한 상태를 사용하도록 Singleton 구조를 적용"
      ],

      outcome:
        "웹 프레임워크를 사용하기 전 Java만으로 회원 → 메뉴 조회 → 장바구니 → 결제 → 주문내역이라는 하나의 서비스 흐름을 직접 구현했습니다. 객체지향 설계, 상속, 제네릭, 컬렉션, Stream API, 예외 처리와 Singleton 구조를 실제 기능에 적용하면서 이후 JSP/Servlet과 Spring 기반 프로젝트를 이해하기 위한 Java 기본기를 익힌 개인 프로젝트입니다."
    },

    stack: {
      backend: [
        "Java",
        "OOP",
        "Java Collections",
        "Stream API",
        "Generics",
        "Exception Handling"
      ],

      frontend: [
        "Console I/O"
      ],

      infra: [
        "JDK"
      ]
    },

    deployment:
      "Local Java Console Application",

    links: {
      github:
        "https://github.com/songseongjun/Q.Q"
    }
  },

];
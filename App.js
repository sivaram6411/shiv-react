/**
 *<div id="parent">
    <div id="child1">
        <h1>hello am h1 tag</h1>
        <h2>hello am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>hello am h1 tag</h1>
        <h2>hello am h2 tag</h2>
    </div>
 </div>
 */

import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "hello am h1 tag"),
//     React.createElement("h2", {}, "hello am h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "hello am h1 tag"),
//     React.createElement("h2", {}, "hello am h2 tag"),
//   ]),
// ]);
// root.render(parent);

//------------------------------------------------------------//

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

/* 
const jxsHeading = <h1 className="heading">Hello Recat using JSX...</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jxsHeading);
*/
//----------------------------------------------------------------//

//React Componant
//React Functional Componant
/*const Title = () => <h1 className="head">Namaste React using JSX...!!!</h1>;

componant composition
const HeadingComponant = () => (
  <div id="container">
    <Title />         //*react composition//
    <Title></Title>   //*react composition//
    {Title()}         //*javascript//
    <h1 className="heading">Namaste React Functional Componant...!!!</h1>
  </div>
);*/

const Header = () => {
  return (
    <nav className="nav-container">
      <div>
        <img
          src="https://res.cloudinary.com/dmv4yhy2i/image/upload/v1706845338/delicious-restaurant-logo.jpg"
          alt="logo"
          className="logo"
        />
      </div>
      <div>
        <h2>GOOD FOOD GOOD MOOD</h2>
      </div>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </nav>
  );
};

const RestCard = (props) => {
  const { resData } = props;
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
        alt="image"
        className="card-image"
      />
      <h3>{resData.info.name}</h3>
      <h5>{resData.info.cuisines.join(", ")}</h5>
      <h5>{resData.info.avgRating}</h5>
      <h5>{resData.info.costForTwo}</h5>
      <h5>{resData.info.sla.slaString}</h5>
    </div>
  );
};

const CardData = [
  {
    info: {
      id: "142670",
      name: "Shah Ghouse Hotel & Restaurant",
      cloudinaryImageId: "bk26jkkqpg55veii0aj9",
      locality: "Santh Nirankari Satsang Bhavan",
      areaName: "Banjara Hills",
      costForTwo: "₹350 for two",
      cuisines: ["Biryani", "Chinese", "Tandoor", "Mughlai", "North Indian"],
      avgRating: 4.2,
      parentId: "19271",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 00:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/shah-ghouse-hotel-and-restaurant-santh-nirankari-satsang-bhavan-banjara-hills-hyderabad-142670",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "344287",
      name: "Varalakshmi Tiffins",
      cloudinaryImageId: "8523266de1213e8ea57e5df4eedf747e",
      locality: "Banjara Hills",
      areaName: "Banjara Hills",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian"],
      avgRating: 4.5,
      veg: true,
      parentId: "6482",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 6.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-01 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/varalakshmi-tiffins-banjara-hills-hyderabad-344287",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "25251",
      name: "Meridian Restaurant",
      cloudinaryImageId: "cxvuxxwpkicbqo3nkqiy",
      locality: "Panjagutta",
      areaName: "Panjagutta",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Chinese", "Kebabs"],
      avgRating: 4.3,
      parentId: "19276",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/meridian-restaurant-panjagutta-hyderabad-25251",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "262087",
      name: "Imperial Multi-Cusine Restaurant",
      cloudinaryImageId: "rqlwvsmzcfxbg9u6ajgm",
      locality: "Banjara Hills",
      areaName: "Redhills",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Chinese", "Indian", "Kebabs", "Tandoor"],
      avgRating: 4.2,
      parentId: "19254",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/imperial-multi-cusine-restaurant-banjara-hills-redhills-hyderabad-262087",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "3324",
      name: "Srikanya",
      cloudinaryImageId: "tw4ytwle8yommmgdy4b0",
      locality: "Punjagutta Road",
      areaName: "Punjagutta",
      costForTwo: "₹250 for two",
      cuisines: ["Andhra", "Seafood"],
      avgRating: 4.3,
      parentId: "7317",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-01 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/srikanya-road-punjagutta-hyderabad-3324",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "1590",
      name: "Sarvi Restaurant",
      cloudinaryImageId: "ds6nasa6qpxunkhglz5g",
      locality: "Banjara Hills",
      areaName: "Banjara Hills",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "Chinese",
        "Indian",
        "Kebabs",
        "Tandoor",
        "Desserts",
      ],
      avgRating: 4.3,
      parentId: "4623",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sarvi-restaurant-banjara-hills-hyderabad-1590",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "335159",
      name: "Theobroma",
      cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
      locality: "Jubilee Hills",
      areaName: "Jubilee Hills",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts"],
      avgRating: 4.5,
      parentId: "1040",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-01 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
            shortDescription: "Perfect Cake Delivery",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
                  shortDescription: "Perfect Cake Delivery",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹699",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/theobroma-jubilee-hills-hyderabad-335159",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "27739",
      name: "Cafe Niloufer Classic",
      cloudinaryImageId: "1171b83d63d7c203e5f1c3e16980cd89",
      locality: "Oshiwara",
      areaName: "Red Hills",
      costForTwo: "₹150 for two",
      cuisines: ["Bakery", "Beverages", "Snacks", "Desserts"],
      avgRating: 4.6,
      parentId: "466854",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 00:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cafe-niloufer-classic-oshiwara-red-hills-hyderabad-27739",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "228215",
      name: "Cafe Niloufer Premium Lounge",
      cloudinaryImageId: "8407ef45d6d2283bf18037c3619cb733",
      locality: "Ivine Banjara Hno8-2",
      areaName: "Banjara Hills",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Beverages", "Snacks", "Desserts"],
      avgRating: 4.6,
      parentId: "392382",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 00:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cafe-niloufer-premium-lounge-ivine-banjara-hno8-2-banjara-hills-hyderabad-228215",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "358725",
      name: "Lucky Restaurant",
      cloudinaryImageId: "zoecoxnubcvdley21ybs",
      locality: "Ameerpet",
      areaName: "Jubilee Hills",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "Tandoor"],
      avgRating: 4,
      parentId: "293683",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/lucky-restaurant-ameerpet-jubilee-hills-hyderabad-358725",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "2784",
      name: "Rayalaseema Ruchulu",
      cloudinaryImageId: "ulykte9termsxkceelxd",
      locality: "Yellareddyguda",
      areaName: "Ameerpet",
      costForTwo: "₹450 for two",
      cuisines: ["South Indian", "Biryani", "Rayalaseema", "North Indian"],
      avgRating: 4.2,
      parentId: "766",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-01 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/rayalaseema-ruchulu-yellareddyguda-ameerpet-hyderabad-2784",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "2782",
      name: "Blue Fox",
      cloudinaryImageId: "cef8e534cb99a61759d7455fe0a909ef",
      locality: "Srinivasa Nagar",
      areaName: "Ameerpet",
      costForTwo: "₹800 for two",
      cuisines: ["Biryani", "North Indian", "Chinese", "Tandoor"],
      avgRating: 4.3,
      parentId: "48033",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 0.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-01 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/blue-fox-srinivasa-nagar-ameerpet-hyderabad-2782",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "353591",
      name: "Mandi @36",
      cloudinaryImageId: "fc5rarfywwliy6rkd5sb",
      locality: "Opposite City Center Mall",
      areaName: "Banjara Hills",
      costForTwo: "₹1000 for two",
      cuisines: ["Arabian"],
      avgRating: 4.2,
      parentId: "13223",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-01 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹1100",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mandi-36-opposite-city-center-mall-banjara-hills-hyderabad-353591",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "300363",
      name: "Barbeque Nation",
      cloudinaryImageId: "fb3b8wkhcnluea9hlshv",
      locality: "Banjara Hills",
      areaName: "Banjara Hills",
      costForTwo: "₹600 for two",
      cuisines: [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 3.9,
      parentId: "2438",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/barbeque-nation-banjara-hills-hyderabad-300363",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "61118",
      name: "Telangana Spice Kitchen",
      cloudinaryImageId: "e6ouqiwqpw5vqmfih9s0",
      locality: "JubileeHills check post",
      areaName: "Jubilee Hills",
      costForTwo: "₹1000 for two",
      cuisines: ["Indian", "Chinese"],
      avgRating: 4.3,
      parentId: "19219",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-01 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/telangana-spice-kitchen-jubileehills-check-post-jubilee-hills-hyderabad-61118",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "41976",
      name: "Istah - The Mediterranean Way",
      cloudinaryImageId: "9a01f2935fcb5ae05426db8264062102",
      locality: "SR Nagar Main Rd",
      areaName: "Ameerpet",
      costForTwo: "₹250 for two",
      cuisines: [
        "Mediterranean",
        "Snacks",
        "Biryani",
        "Grill",
        "Kebabs",
        "Arabian",
        "Lebanese",
        "Beverages",
        "Desserts",
        "Italian",
        "Turkish",
      ],
      avgRating: 4.3,
      parentId: "3518",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹110",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-sr-nagar-main-rd-ameerpet-hyderabad-41976",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "43150",
      name: "10D Express",
      cloudinaryImageId: "ria4jo5ggnvudxf3l2q4",
      locality: "Road no 8",
      areaName: "Banjara Hills",
      costForTwo: "₹600 for two",
      cuisines: ["Indian", "Chinese", "Continental"],
      avgRating: 4.2,
      parentId: "5035",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-01 23:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/10d-express-road-no-8-banjara-hills-hyderabad-43150",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "210985",
      name: "Chicha's",
      cloudinaryImageId: "eb2663e8683604d7e8185b0e68918ce4",
      locality: "Lv Prasad Marg",
      areaName: "Chicha's",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "Chinese"],
      avgRating: 3.9,
      parentId: "9792",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-01 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chichas-lv-prasad-marg-chichas-hyderabad-210985",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "182824",
      name: "Feranoz",
      cloudinaryImageId: "kshxd18jhcauou944m6p",
      locality: "Zahara Nagar, Banjara Hills",
      areaName: "Banjara Hills",
      costForTwo: "₹500 for two",
      cuisines: ["Bakery", "European", "Cafe"],
      avgRating: 4.5,
      parentId: "19211",
      avgRatingString: "4.5",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-01 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹45",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/feranoz-zahara-nagar-banjara-hills-hyderabad-182824",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "1503",
      name: "Cream Stone Ice Cream",
      cloudinaryImageId: "e6af7ef8b8ad04f12d748f144b602c0f",
      locality: "Banjara Hills",
      areaName: "Banjara Hills",
      costForTwo: "₹350 for two",
      cuisines: ["Ice Cream", "Desserts", "Beverages", "Ice Cream Cakes"],
      avgRating: 4.4,
      parentId: "289",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
            shortDescription: "Perfect Cake Delivery",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "D",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
                  shortDescription: "Perfect Cake Delivery",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cream-stone-ice-cream-banjara-hills-hyderabad-1503",
      type: "WEBLINK",
    },
  },
];

function Body() {
  return (
    <div>
      <h3>search</h3>
      <div className="body">
        {CardData.map((restuarant) => <RestCard key={restuarant.info.id} resData = {restuarant} />)}
      </div>
    </div>
  );
}

const Applayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);

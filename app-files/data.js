var APP_DATA = {
  "scenes": [
    {
      "id": "0-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.39499984927907583,
          "pitch": 0.1698079628772753,
          "rotation": 0,
          "target": "0-bathroom"
        },
        {
          "yaw": 2.1670999756117064,
          "pitch": 0.06677038524399137,
          "rotation": 0,
          "target": "2-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bathroom-2",
      "name": "Bathroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.585895072621038,
          "pitch": 0.10434209990711985,
          "rotation": 0,
          "target": "1-bathroom-2"
        },
        {
          "yaw": -1.3480915060751038,
          "pitch": 0.10330566554760345,
          "rotation": 0,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03500799870559668,
          "pitch": 0.21141182898055533,
          "rotation": 0,
          "target": "2-bedroom"
        },
        {
          "yaw": 2.941427061680759,
          "pitch": 0.0022674804286939576,
          "rotation": 0,
          "target": "3-hall"
        },
        {
          "yaw": -2.969424769970617,
          "pitch": 0.008473798276215305,
          "rotation": 0,
          "target": "0-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3814919701018873,
          "pitch": 0.12341032549435837,
          "rotation": 0,
          "target": "3-hall"
        },
        {
          "yaw": -0.8912706634237182,
          "pitch": 0.12464889255033995,
          "rotation": 0,
          "target": "4-kids-1"
        },
        {
          "yaw": -0.32373875320365286,
          "pitch": 0.06661987679181891,
          "rotation": 0,
          "target": "5-kids-2"
        },
        {
          "yaw": 0.5943036812798539,
          "pitch": 0.0128108070983739,
          "rotation": 0,
          "target": "8-kitchen-1"
        },
        {
          "yaw": -2.125131554485055,
          "pitch": 0.0021318111228456615,
          "rotation": 0,
          "target": "0-bathroom"
        },
        {
          "yaw": 0.8338701306819338,
          "pitch": 0.07205140019433465,
          "rotation": 0,
          "target": "1-bathroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kids-1",
      "name": "Kids 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.055574036198384746,
          "pitch": 0.24274400415187714,
          "rotation": 0,
          "target": "4-kids-1"
        },
        {
          "yaw": -3.001604741708377,
          "pitch": 0.01864284459165333,
          "rotation": 0,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kids-2",
      "name": "Kids 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.12153009455398589,
          "pitch": 0.2399523618229331,
          "rotation": 0,
          "target": "5-kids-2"
        },
        {
          "yaw": 3.1330264521263995,
          "pitch": 0.06672024844239033,
          "rotation": 0,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1317723586170203,
          "pitch": 0.06344205387742363,
          "rotation": 0,
          "target": "6-kitchen"
        },
        {
          "yaw": -1.827153404909442,
          "pitch": 0.027587630522926787,
          "rotation": 0,
          "target": "7-living-room"
        },
        {
          "yaw": -1.5064191314685313,
          "pitch": 0.012935814782611743,
          "rotation": 0,
          "target": "9-terrace"
        },
        {
          "yaw": -2.368002679423526,
          "pitch": 0.01649281727936014,
          "rotation": 0,
          "target": "3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-living-room",
      "name": "Living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.12620084258819908,
        "pitch": -0.003804065945891111,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -0.31586926645466384,
          "pitch": 0.08104229582007783,
          "rotation": 0,
          "target": "7-living-room"
        },
        {
          "yaw": 1.514362046645985,
          "pitch": 0.02650167874027254,
          "rotation": 0,
          "target": "6-kitchen"
        },
        {
          "yaw": 0.251398964351937,
          "pitch": 0.034538742475566764,
          "rotation": 0,
          "target": "9-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-kitchen-1",
      "name": "Kitchen 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2622265434426012,
          "pitch": 0.04757005816693827,
          "rotation": 0,
          "target": "6-kitchen"
        },
        {
          "yaw": 3.127364062659778,
          "pitch": 0.015994924827115398,
          "rotation": 0,
          "target": "3-hall"
        },
        {
          "yaw": -0.1411457144793875,
          "pitch": -0.022678972956658328,
          "rotation": 0,
          "target": "9-terrace"
        },
        {
          "yaw": 2.8909712115104576,
          "pitch": 0.040783705943248094,
          "rotation": 0,
          "target": "1-bathroom-2"
        },
        {
          "yaw": -1.8228442410035033,
          "pitch": 0.03386739666430927,
          "rotation": 0,
          "target": "7-living-room"
        },
        {
          "yaw": -1.0235451540811429,
          "pitch": 0.024269252998687207,
          "rotation": 0,
          "target": "9-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-terrace",
      "name": "Terrace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 375,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": -0.3156665060676431,
          "pitch": 0.2673757298658934,
          "rotation": 0,
          "target": "9-terrace"
        },
        {
          "yaw": -3.1070696573965026,
          "pitch": -0.015895561273953973,
          "rotation": 0,
          "target": "7-living-room"
        },
        {
          "yaw": 1.9921959323912724,
          "pitch": 0.0005532716982497021,
          "rotation": 0,
          "target": "8-kitchen-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Penthouse, Germany",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

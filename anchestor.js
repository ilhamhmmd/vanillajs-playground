const anchestor = [
  {
    husband: "Mbah Enggeut",
    wife: "Mbah Istri",
    child: [
      {
        husband: "Maman Hadinata",
        wife: "Lusi",
        child: [
          {
            husband: "Tyo",
            wife: "Tya",
            child: [
              {
                husband: "Letisa",
              },
            ],
          },
          {
            husband: "Febian Kamarullah",
          },
          {
            husband: "Nabila Lumaniar",
          },
        ],
      },
      {
        husband: "Beben Nurfadila",
        wife: "Neli",
        child: [
          {
            husband: "Nadia",
          },
          {
            husband: "Naura",
          },
        ],
      },
      {
        husband: "Beni Nurhadi",
        wife: "Susi",
        child: [
          {
            husband: "Saquila",
          },
          {
            husband: "Aisy",
          },
        ],
      },
      {
        husband: "Appa",
        wife: "Embay",
        child: [
          {
            husband: "Rifqi Nugraha",
          },
          {
            husband: "Ilham Muhammad",
          },
          {
            husband: "Emsya Salsabela"
          }
        ],
      },
      {
        husband: "Endi Nuradjat",
        wife: "Uswatun Hasanah",
        child: [
          {
            husband: "Fatih Jalaludin Rumi",
          },
          {
            husband: "Kayla Siti Humaira",
          },
          {
            husband: "Al-Ghazi Nur Ramadhan"
          }
        ],
      },
    ],
  },
];

console.log(anchestor);

function renderAnchestor(node, depth = 0) {
  let inheritance = "", space = "";

  for (let i = 0; i< depth; i++) {
    inheritance += "─";
    space += " ";
  }

  node.forEach(function(item) {
    console.log(`${depth > 0 ? space + "└" + inheritance + "" : ""} ${item.husband} ${item.wife !== undefined ? "& " + item.wife : ""}`)
    
    if (item.child) renderAnchestor(item.child, (depth += 1));
  });
}

renderAnchestor(anchestor);
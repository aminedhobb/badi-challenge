export const schema = {
  type: "object",
  properties: {
    data: {
      type: "object",
      title: "Add a zombie",
      properties: {
        type: { type: "string" },
        attributes: {
          type: "object",
          title: "",
          required: ["name", "hit_points", "speed", "brains_eaten", "turn_date"],
          properties: {
            name: { type: "string", title: "name" },
            hit_points: { type: "integer", title: "hit points" },
            speed: { type: "integer", title: "speed" },
            brains_eaten: { type: "integer", title: "brains eaten" },
            turn_date: { type: "string", title: "turn date" },
            user_id: { type: "integer" },
            avatar: { type: "string", title: "avatar", format: "data-url" },
            weapon_ids: {
              type: "array",
              title: "select weapons",
              items: {
                type: "integer"
              }
            },
            armor_ids: {
              type: "array",
              title: "select armors",
              items: {
                type:"integer"
              }
            },
            weapons_attributes: {
              type: "array",
              title: "add a new weapon",
              items: {
                type: "object",
                required: ["name", "attack_points", "durability", "price"],
                properties: {
                  name: { type: "string", title: "weapon name" },
                  attack_points: { type: "integer", title: "attack points" },
                  durability: { type: "integer", title: "durability" },
                  price: { type: "integer", title: "price" }
                }
              }
            },
            armors_attributes: {
              type: "array",
              title: "add a new armor",
              items: {
                type: "object",
                required: ["name", "defense_points", "durability", "price"],
                properties: {
                  name: { type: "string", title: "armor name" },
                  defense_points: { type: "integer", title: "defense points" },
                  durability: { type: "integer", title: "durability" },
                  price: { type: "integer", title: "price" }
                }
              }
            }
          }
        }
      }
    }
  }
};

export const uiSchema = {
  data: {
    type: { "ui:widget" : "hidden"},
    attributes: {
      name: { "ui:autofocus" : true },
      turn_date: { "ui:widget" : "date" },
      hit_points: { "ui:widget" : "range" },
      speed: { "ui:widget" : "range" },
      brains_eaten: { "ui:widget" : "range" },
      user_id: { "ui:widget" : "hidden" },
      // avatar: { "ui:widget" : "file" },
      weapons_attributes: {
        items: {
          attack_points: { "ui:widget" : "range" },
          durability: { "ui:widget" : "range" },
          price: { "ui:widget" : "range" }
        }
      },
      armors_attributes: {
        items: {
          defense_points: { "ui:widget" : "range" },
          durability: { "ui:widget" : "range" },
          price: { "ui:widget" : "range" }
        }
      }
    }
  }
};

export const formData = {
  data: {
    type: "zombie",
    attributes: {
      user_id: ""
    }
  }
}
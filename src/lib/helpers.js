import { isEmpty } from "lodash";

const initialState = {
  population: [],
  age: {
    min: 0,
    max: 400,
  },
  weight: {
    max: 400,
    min: 0,
  },
  height: {
    max: 400,
    min: 0,
  },
  hair: {
    options: [],
  },
  professions: {
    options: [],
  },
  gnomeSelected: "",
  professionSelected: "",
  qualifications: {
    maxNumberOfFriends: null,
    maxNumberOfProfessions: null,
  },
  loading: false,
  idShowDetail: "",
};

export const createFilters = (items) => {
  let {
    age,
    weight,
    height,
    qualifications,
    hair,
    professions,
    gnomeSelected,
    idShowDetail,
  } = initialState;

  items?.forEach((element) => {
    if (element.id === 0) {
      age.min = element.age;
      age.max = element.age;
      weight.min = element.weight;
      weight.max = element.weight;
      height.min = element.height;
      height.max = element.height;
      qualifications.maxNumberOfFriends = element.friends.length || 0;
      qualifications.maxNumberOfProfessions = element.professions.length || 0;
    }
    // Get Max's and Min's
    if (age.min > element.age) {
      age.min = element.age;
    }
    if (age.max < element.age) {
      age.max = element.age;
    }

    if (weight.min > element.weight) {
      weight.min = element.weight;
    }
    if (weight.max < element.weight) {
      weight.max = element.weight;
    }

    if (height.min > element.height) {
      height.min = element.height;
    }
    if (height.max < element.height) {
      height.max = element.height;
    }

    // Create a collection of kind of hairs
    if (element.hair_color) {
      if (hair.options.indexOf(element.hair_color) === -1) {
        hair.options.push(element.hair_color);
      }
    }

    // Create a collection of kind of professions
    for (let x in element.professions) {
      if (professions.options.indexOf(element.professions[x]) === -1) {
        professions.options.push(element.professions[x]);
      }
    }

    // Ranking of best qualified (popularity and friendly)
    if (qualifications.maxNumberOfFriends < element.friends.length) {
      qualifications.maxNumberOfFriends = element.friends.length;
    }
    if (qualifications.maxNumberOfProfessions < element.professions.length) {
      qualifications.maxNumberOfProfessions = element.professions.length;
    }
  });

  professions.selected = "";
  hair.selected = "";
  gnomeSelected = "";
  idShowDetail = "";

  return {
    data: {
      age,
      weight,
      height,
      qualifications,
      hair,
      professions,
      gnomeSelected,
      idShowDetail,
    },
  };
};

export const filter = (selected, setter, array) => {
  setter(
    array?.filter((item) => {
      if (!isEmpty(selected.friend)) {
        if (
          (item.professions.includes(selected.profession) ||
            selected.profession === "all") &&
          (item.hair_color === selected.hairColor ||
            selected.hairColor === "all") &&
          item.friends.includes(selected.friend) &&
          item.age > selected.ageValue[0] &&
          item.age < selected.ageValue[1] &&
          item.height > selected.heightValue[0] &&
          item.height < selected.heightValue[1] &&
          item.weight > selected.weightValue[0] &&
          item.weight < selected.weightValue[1]
        ) {
          return item;
        }
      } else {
        if (
          (item.professions.includes(selected.profession) ||
            selected.profession === "all") &&
          (item.hair_color === selected.hairColor ||
            selected.hairColor === "all") &&
          item.age > selected.ageValue[0] &&
          item.age < selected.ageValue[1] &&
          item.height > selected.heightValue[0] &&
          item.height < selected.heightValue[1] &&
          item.weight > selected.weightValue[0] &&
          item.weight < selected.weightValue[1]
        ) {
          return item;
        }
      }

      return false;
    })
  );
};

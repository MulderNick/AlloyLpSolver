import Application from "@/main";

const inputRules: any = {
  required: (value: any) => !!value || `${Application.$t("labels.required")}.`,
  email: (value: string) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || `${Application.$t("labels.invalidEmail")}.`;
  },
  // only works with a .bind() to an array of existing values
  isUnique: function(value: string) {
    return !this.includes(value) || `${Application.$t("labels.notUnique")}.`;
  },
  // only works with a .bind() of an object containing { existingValues: any, comparator(v1, v2)  }
  isUniqueFn: function(value: string) {
    return !this.includes(value) || `${Application.$t("labels.notUnique")}.`;
  },
};

export default inputRules;

import isEmpty from "lodash/isEmpty";

interface DependenciesValidation { 
  message: string
  valid: boolean
}

const getDependenciesValidation = (message: string, valid: boolean): DependenciesValidation => ({ 
  message,
  valid
});

const validateDependenciesFormat = (value: string): boolean => {
  const rgx = /^(\w+ DEPENDS( \w+){1,}\s*?\n?)*$/g;
  const test = rgx.test(value);

  return test;
};

const validateDependenciesGraph = (value: string): boolean => {
  const dependencies = value.split('\n');

  return false;
}

export const validateDependencies = (value: string): DependenciesValidation => {
  if (isEmpty(value)) {
    return getDependenciesValidation('', false);
  }

  if (!validateDependenciesFormat(value)) {
    return getDependenciesValidation('', false);
  }
  
  if (!validateDependenciesGraph(value)) {
    return getDependenciesValidation('', false);
  }

  return getDependenciesValidation('', true);
};

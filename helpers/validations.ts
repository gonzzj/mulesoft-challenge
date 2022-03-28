interface DependenciesValidation { 
  message: string
  valid: boolean
}

export const validateDependencies = (value: string): DependenciesValidation => {
  if (!validateDependenciesFormat(value)) {
    return getDependenciesValidation('', false);
  }
  
  return getDependenciesValidation('', true);
};

export const validateDependenciesFormat = (value: string): boolean => {
  const rgx = /^(\w+ DEPENDS( \w+){1,}\s*?\n?)*$/g;
  const test = rgx.test(value);

  return test;
};

export const getDependenciesValidation = (message: string, valid: boolean): DependenciesValidation => ({ 
  message,
  valid
});

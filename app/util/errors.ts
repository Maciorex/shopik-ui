export const getErrorMessage = (response: any) => {
  if (response.message) {
    if (Array.isArray(response.message)) {
      return formatMessage(response.message[0]);
    }
    return formatMessage(response.message);
  }
  return 'Unknown error';
};

const formatMessage = (message: string) => {
  return message.charAt(0).toUpperCase() + message.slice(1);
};

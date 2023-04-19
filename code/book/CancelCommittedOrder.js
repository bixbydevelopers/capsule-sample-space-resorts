export default function ({receipt}) {
  receipt.canceled = true;
  return receipt;
};

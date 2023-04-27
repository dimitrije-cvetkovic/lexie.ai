export default function useSubmitForm(formName: string) {
  document.forms[formName as any].requestSubmit();
}
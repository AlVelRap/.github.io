import {MDCList} from '@material/list';
const list = new MDCList(document.querySelector('.mdc-dialog .mdc-list'));

dialog.listen('MDCDialog:opened', () => {
  list.layout();
});
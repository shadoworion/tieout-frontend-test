import {
  GetContextMenuItemsParams,
  IMenuActionParams,
  MenuItemDef,
} from "ag-grid-community";
import { TranslationFunctions } from "../../../i18n/i18n-types";
import { renderToString } from "react-dom/server";
import { HiOutlineRefresh } from "react-icons/hi";
import { RiFilterOffLine, RiSearchEyeLine } from "react-icons/ri";
import {
  TbArrowAutofitLeft,
  TbArrowAutofitWidth,
  TbHash,
  TbTableImport,
} from "react-icons/tb";

export enum Icons {
  excel = `<span class="ag-icon ag-icon-excel" unselectable="on" role="presentation"></span>`,
  pipedriveLogo = `<svg height="32" viewBox="0 0 121 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.4673 4.66455C21.7516 4.66455 22.7928 3.6241 22.7928 2.34064C22.7928 1.05718 21.7516 0.0167236 20.4673 0.0167236C19.1829 0.0167236 18.1417 1.05718 18.1417 2.34064C18.1417 3.6241 19.1829 4.66455 20.4673 4.66455Z"></path><path d="M22.5555 5.82849H18.3803V20.1432H22.5555V5.82849Z" fill-rule="evenodd" clip-rule="evenodd"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M87.6574 4.66455C88.9418 4.66455 89.983 3.6241 89.983 2.34064C89.983 1.05718 88.9418 0.0167236 87.6574 0.0167236C86.3731 0.0167236 85.3319 1.05718 85.3319 2.34064C85.3319 3.6241 86.3731 4.66455 87.6574 4.66455Z"></path><path d="M89.7456 5.82849H85.5705V20.1432H89.7456V5.82849Z" fill-rule="evenodd" clip-rule="evenodd"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M120.108 12.514C120.108 8.42815 116.848 5.51392 112.931 5.51392C108.528 5.51392 105.325 8.57122 105.325 12.9716C105.325 17.3152 108.328 20.4292 112.931 20.4292C116.848 20.4292 119.45 18.0009 119.936 15.3148H115.904C115.446 16.4865 114.102 17.1438 112.845 17.1438C111.158 17.1154 109.9 16.1152 109.529 13.9434H120.079L120.108 12.514ZM109.614 11.3424C110.072 9.22857 111.644 8.71429 112.93 8.71429C114.246 8.71429 115.79 9.37164 115.989 11.3424H109.614Z"></path><path d="M102.237 5.82849H106.526L100.692 20.1432H96.2902L90.4564 5.82849H94.9462L98.577 15.3136L102.237 5.82849Z" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M79.2775 8.11376C80.2501 6.59928 81.794 5.62744 83.5662 5.62744C83.8809 5.62744 84.2807 5.6558 84.5387 5.74216V9.65659C84.1956 9.59988 83.8241 9.57152 83.481 9.57152C80.7931 9.57152 79.3923 11.5436 79.3923 14.3714V20.1432H75.2469V9.59988C75.2469 9.37174 75.1605 9.31374 74.9038 9.31374H73.4734V5.82851H77.0758C78.5346 5.82851 79.2775 6.51422 79.2775 7.80055V8.11376Z" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M72.7291 16.6567C72.5009 16.6567 72.4428 16.5999 72.4428 16.3705V2.08546C72.4428 0.657347 71.6999 0 70.1844 0H66.5535V3.45687H67.8975C68.1542 3.45687 68.2406 3.54194 68.2406 3.77137V7.14317C67.6976 6.42911 66.1821 5.51398 64.1519 5.51398C60.1199 5.51398 57.1753 8.57129 57.1753 12.9716C57.1753 17.4571 60.0064 20.4293 64.0371 20.4293C66.2956 20.4293 67.8975 19.286 68.4973 18.3438C68.554 18.9728 68.9835 20.1445 70.5274 20.1445H74.2163V16.6592H72.7291V16.6567ZM64.8948 16.9995C62.893 16.9995 61.4356 15.4567 61.4356 12.9704C61.4356 10.5988 62.9227 8.99921 64.9232 8.99921C67.1817 8.99921 68.3257 10.9996 68.3257 12.942C68.3257 15.9709 66.4968 16.9995 64.8948 16.9995Z" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M56.2595 12.514C56.2595 8.42815 53.0002 5.51392 49.083 5.51392C44.6796 5.51392 41.477 8.57122 41.477 12.9716C41.477 17.3152 44.4797 20.4292 49.083 20.4292C53.0002 20.4292 55.6017 18.0009 56.088 15.3148H52.056C51.5982 16.4865 50.2542 17.1438 48.9966 17.1438C47.3095 17.1154 46.052 16.1152 45.6805 13.9434H56.2312L56.2595 12.514ZM45.7669 11.3424C46.2248 9.22857 47.7971 8.71429 49.083 8.71429C50.3986 8.71429 51.9425 9.37164 52.1425 11.3424H45.7669Z" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M33.8155 5.51392C31.4707 5.51392 29.812 6.74225 29.1838 7.79916C29.069 7.19853 28.6692 5.82712 27.0685 5.82712H23.5809V9.31364H25.01C25.2667 9.31364 25.3247 9.37035 25.3247 9.59978V25.9999H29.4998V19.6572L29.4715 18.6286C30.0712 19.6288 31.6732 20.4292 33.6169 20.4292C37.7056 20.4292 40.5651 17.4003 40.5651 12.9716C40.5626 8.51322 37.8462 5.51392 33.8155 5.51392ZM32.7566 16.9994C30.4981 16.9994 29.4108 14.9707 29.4108 13.0283C29.4108 10.0573 31.2127 8.99914 32.8134 8.99914C34.7571 8.99914 36.301 10.6283 36.301 12.9986C36.3023 15.7995 34.4153 16.9994 32.7566 16.9994Z" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M17.4027 12.9716C17.4027 17.4003 14.5432 20.4293 10.4545 20.4293C8.51071 20.4293 6.90877 19.6289 6.30901 18.6287L6.33738 19.6572V26H2.16355V9.59983C2.16355 9.37169 2.1068 9.31369 1.84884 9.31369H0.418434V5.82847H3.90738C5.50803 5.82847 5.90916 7.19987 6.02267 7.80051C6.6521 6.7436 8.3095 5.51526 10.6544 5.51526C14.6863 5.51397 17.4027 8.51328 17.4027 12.9716ZM13.1424 13C13.1424 10.6284 11.5985 9.00049 9.65349 9.00049C8.05283 9.00049 6.25096 10.0574 6.25096 13.0296C6.25096 14.972 7.33699 17.0008 9.59674 17.0008C11.2554 16.9995 13.1424 15.7995 13.1424 13Z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`,
  pipedrive = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="cui5-icon cui5-icon--color-undefined undefined"><path d="M20.05 9.61c0 3.93-2.53 6.62-6.15 6.62-1.73 0-3.15-.71-3.68-1.6l.03.91v5.63h-3.7V6.62c0-.2-.05-.25-.28-.25H5v-3.1h3.1c1.41 0 1.77 1.23 1.87 1.76.56-.94 2.02-2.03 4.1-2.03 3.58 0 5.98 2.66 5.98 6.61Zm-3.77.03c0-2.1-1.37-3.55-3.1-3.55-1.41 0-3.01.94-3.01 3.58 0 1.72.96 3.52 2.96 3.52 1.48 0 3.15-1.07 3.15-3.55Z"></path></svg>`,
  clerk = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><ellipse cx="12" cy="12" rx="3.74998" ry="3.75" fill="#131316"></ellipse><path d="M18.7566 20.8788C19.0756 21.1978 19.0436 21.7261 18.6687 21.9772C16.7613 23.2548 14.4672 23.9999 11.9991 23.9999C9.5309 23.9999 7.23678 23.2548 5.32939 21.9772C4.95452 21.7261 4.92248 21.1978 5.24153 20.8788L7.98198 18.1383C8.22966 17.8906 8.6139 17.8515 8.92565 18.0112C9.84746 18.4835 10.8921 18.7499 11.9991 18.7499C13.106 18.7499 14.1507 18.4835 15.0725 18.0112C15.3842 17.8515 15.7685 17.8906 16.0161 18.1383L18.7566 20.8788Z" fill="#131316"></path><path opacity="0.5" d="M18.6696 2.02275C19.0445 2.27385 19.0765 2.80207 18.7575 3.12111L16.017 5.86158C15.7693 6.10927 15.3851 6.14839 15.0733 5.98868C14.1515 5.51644 13.1068 5.25 11.9999 5.25C8.27204 5.25 5.24997 8.27208 5.24997 12C5.24997 13.1069 5.51641 14.1516 5.98866 15.0734C6.14836 15.3852 6.10924 15.7694 5.86156 16.0171L3.1211 18.7575C2.80206 19.0766 2.27384 19.0446 2.02274 18.6697C0.745142 16.7623 0 14.4682 0 12C0 5.37258 5.37256 0 11.9999 0C14.4681 0 16.7622 0.745147 18.6696 2.02275Z" fill="#131316"></path></svg>`,
  coingeko = `<svg width="24" height="24" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_238_5139)"><path d="M95.3201 47.7848C95.437 74.2931 74.1955 95.8818 47.8757 95.9995C21.5525 96.1172 0.120677 74.7236 0.00047986 48.2152C-0.116378 21.7035 21.1251 0.118179 47.445 0.000483373C73.7681 -0.117212 95.2 21.2731 95.3168 47.7848H95.3201Z" fill="#8DC63F"/><path d="M91.7276 47.7979C91.8378 72.3122 72.1955 92.2733 47.859 92.3843C23.519 92.4953 3.69988 72.7124 3.58969 48.1981C3.47951 23.6839 23.1217 3.72273 47.4616 3.61177C71.7982 3.50416 91.6174 23.2837 91.7276 47.7979Z" fill="#F9E988"/><path d="M48.4633 6.48732C51.2411 5.93919 54.1259 6.01317 56.9372 6.47051C59.7484 6.94465 62.5196 7.81896 65.0271 9.19767C67.5379 10.5898 69.7114 12.4763 71.875 14.2485C74.0319 16.0408 76.1887 17.8298 78.2354 19.797C80.3021 21.744 82.1552 23.9533 83.6576 26.3946C85.1868 28.8158 86.519 31.3849 87.4606 34.1054C89.3002 39.5496 89.9379 45.4176 89.0231 51.0131H88.7393C87.8178 45.4646 86.5658 40.1818 84.6125 35.1512C83.661 32.6359 82.6326 30.1407 81.3539 27.7599C80.0484 25.3993 78.6528 23.0689 77.0668 20.8293C75.4642 18.6099 73.5611 16.5688 71.3174 14.9849C69.0804 13.3809 66.5062 12.3385 64.0188 11.3498C61.5247 10.3477 59.0406 9.38262 56.453 8.63274C53.8688 7.86267 51.2211 7.31791 48.4633 6.76979V6.48396V6.48732Z" fill="white"/><path d="M70.0087 32.1144C66.8101 31.183 63.498 29.8581 60.1392 28.5231C59.9455 27.6756 59.201 26.6198 57.6918 25.3251C55.4982 23.4083 51.3781 23.4588 47.819 24.3062C43.8892 23.3747 40.0062 23.0418 36.2801 23.943C5.81008 32.4003 23.0851 53.0239 11.8967 73.7618C13.4893 77.1615 30.6475 97.0083 55.4749 91.6817C55.4749 91.6817 46.9843 71.1321 66.1457 61.2659C81.6879 53.266 92.9163 38.4095 70.0054 32.1111L70.0087 32.1144Z" fill="#8BC53F"/><path d="M73.7681 45.6293C73.7681 46.6549 72.9468 47.4922 71.9284 47.4956C70.9101 47.5023 70.0787 46.6717 70.0721 45.6427C70.0654 44.6171 70.8901 43.7798 71.9117 43.7764C72.9301 43.7697 73.7614 44.6003 73.7681 45.6259V45.6293Z" fill="white"/><path d="M47.819 24.3101C50.0393 24.4681 58.0658 27.1079 60.1358 28.5236C58.4197 23.4795 52.6001 22.8103 47.819 24.3101Z" fill="#009345"/><path d="M49.9291 37.0607C49.9291 41.8022 46.1128 45.6424 41.4085 45.6424C36.7041 45.6424 32.8878 41.8022 32.8878 37.0607C32.8878 32.3193 36.7041 28.4824 41.4085 28.4824C46.1128 28.4824 49.9291 32.3227 49.9291 37.0607Z" fill="white"/><path d="M47.4049 37.1416C47.4049 40.474 44.7205 43.1776 41.4117 43.1776C38.103 43.1776 35.4186 40.4774 35.4186 37.1416C35.4186 33.8057 38.103 31.1055 41.4117 31.1055C44.7205 31.1055 47.4049 33.8091 47.4049 37.1416Z" fill="#58595B"/><path d="M80.6726 49.4091C73.7713 54.3086 65.9151 58.0244 54.7802 58.0244C49.5683 58.0244 48.5099 52.4457 45.0643 55.1796C43.2847 56.5919 37.0144 59.7495 32.0362 59.5108C27.0146 59.2687 18.9982 56.3296 16.7445 45.6328C15.853 56.3296 15.3989 64.2119 11.4091 73.2441C19.3521 86.0527 38.2865 95.9324 55.4747 91.6853C53.6283 78.6951 64.9001 65.9739 71.2505 59.4637C73.6545 56.9988 78.262 52.9736 80.6726 49.4091Z" fill="#8BC53F"/><path d="M80.4024 49.7321C78.2588 51.6993 75.708 53.1587 73.1104 54.4432C70.4861 55.6908 67.7516 56.7063 64.927 57.4428C62.1124 58.1759 59.1709 58.7273 56.1927 58.4583C53.2679 58.1994 50.1761 57.1637 48.2029 54.9207L48.2964 54.8131C50.7304 56.3936 53.5049 56.9485 56.2795 57.0292C59.054 57.1032 61.882 56.8947 64.6699 56.3264C67.4511 55.748 70.1823 54.8838 72.8233 53.7875C75.4576 52.6913 78.0619 51.4235 80.3089 49.6211L80.399 49.7287L80.4024 49.7321Z" fill="#58595B"/></g><defs><clipPath id="clip0_238_5139"><rect width="96" height="96" fill="white"/></clipPath></defs></svg>`,
  bitquery = `<svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 1226.98 1529.31">
  <defs>
    <style>
      .cls-1 {
        fill: url(#linear-gradient-6);
      }

      .cls-2 {
        fill: url(#linear-gradient-2);
      }

      .cls-3 {
        fill: url(#linear-gradient-3);
      }

      .cls-3, .cls-4, .cls-5, .cls-6 {
        isolation: isolate;
      }

      .cls-4 {
        fill: url(#linear-gradient-4);
      }

      .cls-5 {
        fill: url(#linear-gradient-5);
      }

      .cls-6 {
        fill: url(#linear-gradient);
      }
    </style>
    <linearGradient id="linear-gradient" x1="405.78" y1="1529.31" x2="405.78" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#cd0d5f"/>
      <stop offset=".44" stop-color="#c8105b"/>
      <stop offset="1" stop-color="#c01457"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="1226.98" y1="217.37" x2="0" y2="217.37" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#7ed3c3"/>
      <stop offset=".56" stop-color="#7ed3c3"/>
      <stop offset="1" stop-color="#7ed3c3"/>
    </linearGradient>
    <linearGradient id="linear-gradient-3" x1="35.81" y1="-62.03" x2="1194.16" y2="606.74" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#40a8a3"/>
      <stop offset=".56" stop-color="#59b9af"/>
      <stop offset="1" stop-color="#78d0c1"/>
    </linearGradient>
    <linearGradient id="linear-gradient-4" x1="1105.29" y1="1396.61" x2="-145.66" y2="145.66" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ec5018"/>
      <stop offset=".44" stop-color="#ed8335"/>
      <stop offset="1" stop-color="#f8e170"/>
    </linearGradient>
    <linearGradient id="linear-gradient-5" x1="207.09" y1="1522.69" x2="207.09" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ac0f4e"/>
      <stop offset="1" stop-color="#5a1041"/>
    </linearGradient>
    <linearGradient id="linear-gradient-6" x1="59.22" y1="-59.22" x2="1256.41" y2="1137.97" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#e7d08a"/>
      <stop offset=".56" stop-color="#ddaa75"/>
      <stop offset="1" stop-color="#f27e4f"/>
    </linearGradient>
  </defs>
  <g id="Layer_1-2" data-name="Layer_1">
    <g>
      <path class="cls-6" d="M811.55,1528.76c-6.62.55-12.69.55-19.31.55h-357.5c-25.38,0-50.21-2.21-74.48-6.62l46.34-152.27c19.86-65.1,0-136.27-51.31-181.51l-70.62-62.34c-37.52-33.1-58.48-80.55-58.48-130.2v-299.02c0-18.76-3.31-38.07-9.38-55.72L0,0l379.02,534.6c18.21,25.38,29.24,54.62,32.55,85.51l24.27,223.44c6.62,61.24,43.58,115.3,98.76,142.89l133.51,67.31c53.51,27.03,90.48,78.89,98.2,138.48l45.24,336.54Z"/>
      <path class="cls-2" d="M1226.98,434.74c-60.13-81.65-150.06-136.27-250.47-151.17l-214.06-32.55c-30.34-4.41-60.13-13.24-87.72-25.93-27.58-12.69-54.06-29.24-77.24-49.1-47.44-39.72-103.72-67.86-164.41-81.1L.55,0h-.55,788.38c224.54,0,413.22,171.58,436.39,390.05,1.66,14.9,2.21,29.24,2.21,44.69Z"/>
      <path class="cls-3" d="M1226.98,434.74v11.58c0,2.76,0,5.52-.55,8.28v3.86c0,2.76-.55,4.96-.55,7.17v3.31c-.55,3.31-.55,6.62-1.11,9.38v1.11c-.55,2.76-.55,5.52-1.1,8.27,0,1.11,0,1.66-.55,2.76-.55,3.31-1.1,6.62-1.66,10.48-.55,2.76-.55,4.96-1.1,7.72-.55,4.41-1.66,9.38-2.76,13.79-.55,3.31-1.65,6.62-2.21,9.38v1.11c-1.1,3.31-1.66,6.62-2.76,10.48-.55,2.76-1.66,5.52-2.21,8.28-1.66,6.07-3.31,12.14-5.52,18.2-.55,2.21-1.66,4.42-2.21,6.62-1.1,3.31-2.21,6.62-3.31,9.93-3.31,9.38-7.17,18.76-11.58,27.59-1.66,3.31-2.76,6.62-4.42,9.38-1.66,2.76-2.76,6.07-4.41,8.83-1.11,1.66-1.66,3.31-2.76,4.96-1.1,2.21-2.21,3.86-3.31,6.07-9.93,18.2-20.97,35.31-33.65,51.86-1.66,2.21-3.31,4.42-4.97,6.62-5.52,7.17-11.03,13.79-17.1,20.41-3.86,4.41-7.72,8.27-11.58,12.69-2.21,2.76-4.97,4.97-7.17,7.73-3.86,3.86-7.72,7.72-12.14,11.58-3.86,3.86-8.27,7.72-12.69,11.03L0,0h.55l432.53,94.89c60.69,13.24,116.96,41.38,164.41,81.1,23.72,19.86,49.66,36.41,77.24,49.1,27.59,12.69,57.38,21.52,87.72,25.93l214.06,32.55c100.41,14.9,190.33,69.52,250.47,151.17Z"/>
      <path class="cls-4" d="M1219.81,1175.12c-36.41,195.3-204.13,344.81-407.71,353.64l-45.24-336.54c-8.28-59.58-44.69-111.45-98.21-138.48l-133.51-67.31c-55.17-27.59-92.13-81.65-98.76-142.89l-24.27-223.44c-3.31-30.89-14.35-60.13-32.55-85.51L0,0l633.91,604.11c13.79,13.24,25.38,29.24,33.65,46.34.55,1.66,1.65,3.31,2.21,5.52,6.62,16,11.03,32.55,12.69,49.66,5.52,62.89,47.44,116.41,107.03,136.82l73.38,24.83,174.89,59.58c38.07,13.24,70.07,39.72,88.83,75.58l93.24,172.69Z"/>
      <path class="cls-5" d="M406.6,1370.42l-46.89,152.27C155.58,1486.83,0,1308.63,0,1094.58V0l216.82,641.07c6.07,18.21,9.38,36.96,9.38,55.72v299.02c0,49.65,21.51,97.1,58.48,130.2l70.62,62.35c51.31,45.79,71.17,116.96,51.31,182.06Z"/>
      <path class="cls-1" d="M1226.98,1094.58c0,27.58-2.76,54.62-7.72,80.55l-92.13-172.13c-19.31-35.31-50.76-62.35-88.82-75.59l-174.89-59.58-73.38-24.83c-59.58-20.41-102.06-73.93-107.03-136.82-1.66-17.1-6.07-34.2-12.69-49.65-.55-1.66-1.66-3.31-2.21-5.52-8.28-17.1-19.31-33.1-33.65-46.34L0,0l1075.26,764.1c93.24,80,151.72,198.06,151.72,330.47Z"/>
    </g>
  </g>
</svg>`,
}

export const menuItem = ({
  icon,
  name,
  action,
  subMenu,
  cssClasses,
  disabled = false,
  checked = false,
}: MenuItemDef) => ({
  name,
  icon,
  action,
  subMenu,
  cssClasses,
  disabled,
  checked,
});

type IExport = {
  name?: string;
  action: (params: IMenuActionParams<any, any>) => void;
  LL: TranslationFunctions;
};

type IImport = {
  action: (params: IMenuActionParams<any, any>) => void;
  example: () => void;
  LL: TranslationFunctions;
};

type IResetFilters = {
  params: GetContextMenuItemsParams;
  LL: TranslationFunctions;
};

type IRefresh = {
  action: (params: IMenuActionParams<any, any>) => void;
  LL: TranslationFunctions;
};

type IExplorer = {
  scan: any;
  label?: string;
  disabled?: boolean;
  LL: TranslationFunctions;
};

export const exportToExcel = ({ name, action, LL }: IExport) => {
  const menuItem: MenuItemDef = {
    name: name || LL.AgGrid.contextMenu.exportToExcel(),
    icon: `<span class="ag-icon ag-icon-excel" unselectable="on" role="presentation"></span>`,
    action,
    cssClasses: ["text-green-600"],
  };
  return menuItem;
};

export const importFromExcel = ({ action, example, LL }: IImport) => {
  const menuItemWithExample: MenuItemDef = {
    name: LL.AgGrid.contextMenu.importFromExcel.title(),
    icon: renderToString(<TbTableImport size="1.3rem" />),
    subMenu: [
      {
        name: LL.AgGrid.contextMenu.importFromExcel.import(),
        icon: `<span class="ag-icon ag-icon-excel" unselectable="on" role="presentation"></span>`,
        action,
        cssClasses: ["text-blue-600"],
      },
      {
        name: LL.AgGrid.contextMenu.importFromExcel.example(),
        icon: `<span class="ag-icon ag-icon-excel" unselectable="on" role="presentation"></span>`,
        action: example,
      },
    ],
  };
  const menuItem: MenuItemDef = {
    name: LL.AgGrid.contextMenu.importFromExcel.import(),
    icon: `<span class="ag-icon ag-icon-excel" unselectable="on" role="presentation"></span>`,
    action,
    cssClasses: ["text-blue-600"],
  };
  return example ? menuItemWithExample : menuItem;
};

export const copyId = ({ params, LL }: IResetFilters) => {
  const menuItem: MenuItemDef = {
    name: LL.AgGrid.contextMenu.copyId(),
    icon: renderToString(<TbHash size="1.3rem" />),
    action: () => navigator.clipboard.writeText(params.node.data.id),
  };
  return menuItem;
};

export const fitColumns = ({ params, LL }: IResetFilters) => {
  const menuItem: MenuItemDef = {
    name: LL.AgGrid.contextMenu.fitColumns(),
    icon: renderToString(<TbArrowAutofitWidth size="1.3rem" />),
    action: () => params.api.sizeColumnsToFit(),
  };
  return menuItem;
};

export const autoSizeColumns = ({ params, LL }: IResetFilters) => {
  const menuItem: MenuItemDef = {
    name: LL.AgGrid.contextMenu.autoSizeColumns(),
    icon: renderToString(<TbArrowAutofitLeft size="1.3rem" />),
    action: () => params.api.autoSizeAllColumns(),
  };
  return menuItem;
};

export const resetFilters = ({ params, LL }: IResetFilters) => {
  const menuItem: MenuItemDef = {
    name: LL.AgGrid.contextMenu.resetFilters(),
    icon: renderToString(<RiFilterOffLine size="1.3rem" />),
    disabled: Object.keys(params.api.getFilterModel()).length === 0,
    action: () => params.api.setFilterModel(null),
  };
  return menuItem;
};

export const refreshData = ({ action, LL }: IRefresh) => {
  const menuItem: MenuItemDef = {
    name: LL.AgGrid.contextMenu.refreshData(),
    icon: renderToString(<HiOutlineRefresh size="1.3rem" />),
    action,
  };
  return menuItem;
};

export const explorer = ({
  scan,
  label = "",
  disabled = false,
  LL,
}: IExplorer): MenuItemDef => {
  const menuItem: MenuItemDef = {
    icon: renderToString(
      !!scan ? <img src={scan.icon} /> : <RiSearchEyeLine />
    ),
    name: `${
      !!scan
        ? `${LL.SourceTrx.context.scan()}${scan.title}`
        : "חסר Explorer מתאים"
    } ${label}`,
    action: () => (!!scan ? window.open(scan.link, "_blank") : null),
    disabled: !scan || disabled,
  };
  return menuItem;
};

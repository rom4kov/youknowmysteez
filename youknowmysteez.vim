let SessionLoad = 1
if &cp | set nocp | endif
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +64 src/store/reducers/cart.reducer.js
badd +1 src/routes/authentication/authentication.component.jsx
badd +39 src/routes/authentication/authentication.styles.jsx
badd +4 src/routes/categories-preview/categories-preview.component.jsx
badd +1 src/store/reducers/user.reducer.js
badd +2 src/store/redux-types/user.types.js
badd +20 src/store/actions/user.action.js
badd +18 .gitignore
badd +62 src/store/store.js
badd +22 src/store/actions/cart.action.js
badd +1 src/store/redux-types/cart.types.js
badd +1 src/store/selectors/category.selector.js
badd +1 src/store/actions/category.action.js
badd +1 src/store/sagas/category.saga.js
badd +1 src/store/root-saga.js
badd +2 src/routes/shop/shop.component.jsx
badd +80 src/store/sagas/user.saga.js
badd +140 src/utils/firebase/firebase.utils.js
badd +15 src/App.js
badd +1 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/store/selectors/user.selector.js
badd +100 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/routes/navigation/navigation.component.jsx
badd +42 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/sign-up-form/sign-up-form.component.jsx
badd +14 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/sign-up-form/sign-up-form.styles.jsx
badd +29 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/sign-in-form/sign-in-form.styles.jsx
badd +42 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/sign-in-form/sign-in-form.component.jsx
badd +1 src/store/selectors/cart.selector.js
badd +1 src/components/checkout-item/checkout-item.component.jsx
badd +1 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/category-preview/category-preview.component.jsx
badd +21 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/routes/category/category.component.jsx
badd +1 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/store/redux-types/category.types.js
badd +21 src/store/reducers/category.reducer.js
badd +1 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/utils/reducer/reducer.utils.js
badd +35 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/cart-dropdown/cart-dropdown.styles.jsx
badd +27 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/cart-item/cart-item.component.jsx
badd +32 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/cart-dropdown/cart-dropdown.component.jsx
badd +2 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/cart-item/cart-item.styles.jsx
badd +1 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/store/root-reducer.js
badd +1 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/index.js
badd +1 ~/.vim/coc-settings.json
badd +20 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/.eslintrc.json
badd +22 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/product-card/product-card.component.jsx
badd +1 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/package-lock.json
badd +3 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/cart-icon/cart-icon.component.jsx
badd +1 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/checkout-item/checkout-item.styles.jsx
badd +1 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/utils/stripe/stripe.utils.js
badd +1 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/.env
badd +8 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/banner/banner.component.jsx
badd +1 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/package.json
badd +159 src/components/payment-form/payment-form.component.jsx
badd +12 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/payment-form/payment-form.styles.jsx
badd +32 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/routes/cart/cart.component.jsx
badd +21 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/routes/cart/cart.styles.jsx
badd +26 src/routes/payment/payment.component.jsx
badd +21 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/routes/payment/payment.styles.jsx
badd +1 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/jsconfig.json
badd +64 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/button/button.styles.jsx
badd +1 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/routes/navigation/navigation.styles.jsx
badd +266 ./node_modules/acorn/dist/acorn.js
badd +1 ./node_modules/.cache/babel-loader/0948d0ccec5af5309782f6a5cf93baf7d53fc80389fc6f7259b718464a2e0778.json
badd +20 netlify/functions/create-payment-intent.js
badd +25 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/button/button.component.jsx
badd +14 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/spinner/spinner.styles.jsx
badd +4 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/routes/payment/confirmation.component.jsx
argglobal
%argdel
set stal=2
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit netlify/functions/create-payment-intent.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
balt ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/spinner/spinner.styles.jsx
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 6 - ((5 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 6
normal! 05|
tabnext
edit ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/utils/stripe/stripe.utils.js
argglobal
balt ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/index.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 1 - ((0 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 043|
tabnext
edit src/components/payment-form/payment-form.component.jsx
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 49 - ((38 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 49
normal! 02|
tabnext
edit ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/routes/navigation/navigation.component.jsx
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
balt src/routes/payment/payment.component.jsx
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 62 - ((38 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 62
normal! 0
tabnext
edit src/App.js
argglobal
balt ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/index.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 1 - ((0 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 019|
tabnext
edit ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/index.js
argglobal
balt ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/routes/payment/confirmation.component.jsx
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 5 - ((4 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 5
normal! 062|
tabnext
edit src/store/reducers/cart.reducer.js
argglobal
balt src/store/actions/cart.action.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 79 - ((38 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 79
normal! 016|
tabnext 4
set stal=1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :

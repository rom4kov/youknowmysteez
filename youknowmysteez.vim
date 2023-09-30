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
badd +1 src/store/reducers/cart.reducer.js
badd +1 src/routes/authentication/authentication.component.jsx
badd +39 src/routes/authentication/authentication.styles.jsx
badd +1 src/routes/categories-preview/categories-preview.component.jsx
badd +23 src/store/reducers/user.reducer.js
badd +8 src/store/redux-types/user.types.js
badd +1 src/store/actions/user.action.js
badd +1 .gitignore
badd +53 src/store/store.js
badd +60 src/store/actions/cart.action.js
badd +1 src/store/redux-types/cart.types.js
badd +1 src/store/selectors/category.selector.js
badd +1 src/store/actions/category.action.js
badd +1 src/store/sagas/category.saga.js
badd +1 src/store/root-saga.js
badd +4 src/routes/shop/shop.component.jsx
badd +21 src/store/sagas/user.saga.js
badd +79 src/utils/firebase/firebase.utils.js
badd +3 src/App.js
badd +1 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/store/selectors/user.selector.js
badd +46 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/routes/navigation/navigation.component.jsx
badd +30 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/sign-up-form/sign-up-form.component.jsx
badd +14 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/sign-up-form/sign-up-form.styles.jsx
badd +29 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/sign-in-form/sign-in-form.styles.jsx
badd +38 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/sign-in-form/sign-in-form.component.jsx
badd +1 src/store/selectors/cart.selector.js
badd +1 src/components/checkout-item/checkout-item.component.jsx
badd +1 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/category-preview/category-preview.component.jsx
badd +45 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/routes/category/category.component.jsx
badd +1 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/store/redux-types/category.types.js
badd +1 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/store/reducers/category.reducer.js
badd +1 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/utils/reducer/reducer.utils.js
badd +35 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/cart-dropdown/cart-dropdown.styles.jsx
badd +13 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/cart-item/cart-item.component.jsx
badd +49 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/cart-dropdown/cart-dropdown.component.jsx
badd +20 ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/cart-item/cart-item.styles.jsx
argglobal
%argdel
set stal=2
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit src/store/reducers/user.reducer.js
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
balt src/store/reducers/cart.reducer.js
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
let s:l = 33 - ((21 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 33
normal! 025|
tabnext
edit src/store/actions/user.action.js
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
balt src/store/actions/category.action.js
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
let s:l = 19 - ((16 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 19
normal! 0
tabnext
edit src/store/redux-types/user.types.js
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
balt src/store/redux-types/cart.types.js
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
let s:l = 4 - ((3 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 4
normal! 017|
tabnext
edit src/store/sagas/user.saga.js
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
balt ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/store/selectors/user.selector.js
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
let s:l = 64 - ((1 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 64
normal! 019|
tabnext
edit src/store/sagas/category.saga.js
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
balt ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/cart-dropdown/cart-dropdown.styles.jsx
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
normal! 0
tabnext
edit src/utils/firebase/firebase.utils.js
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
balt ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/cart-item/cart-item.styles.jsx
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
let s:l = 144 - ((39 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 144
normal! 0
tabnext
edit ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/sign-up-form/sign-up-form.component.jsx
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
balt ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/sign-in-form/sign-in-form.component.jsx
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
let s:l = 42 - ((21 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 42
normal! 043|
tabnext
edit src/App.js
argglobal
balt ~/Documents/Coding/Complete_React_Dev_Course_2023/Capstone_Project/youknowmysteez/src/components/sign-in-form/sign-in-form.component.jsx
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
normal! 0
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

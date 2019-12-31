import styled from 'styled-components'

const ThreeBoxWrap = styled.div`
    height:364px;
    width:100%;
    background:#fbfcfc;
    display:flex;
    .img{
        display:flex;
        flex-direction:column;
        margin-left:20px;
        margin-top:32px;
                .top{
            margin-bottom:20px;
        }

        dl{
            margin:0;
            background:#fff;
            width:310px;
            height:140px;
            display:flex;
            justify-content:center;
            align-items:center;
            img{
                width:179px;
            }
        }
    }
`
export {
    ThreeBoxWrap
}

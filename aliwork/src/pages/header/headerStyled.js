import styled from 'styled-components'

const HeaderWrap = styled.div`
    width:100%;
    height:52px;
    background:#2c2f33;
    display:flex;
    align-items:center;
    justify-content:center;
    .container{
        width:1000px;
        height:20px;
        line-height:20px;
        display:flex;
        font-size:14px;
        color:#ffffff;
        i{
            height:20px;
            border-left:2px solid #ffffff;
            margin:0 10px;
        }
        ul{
            height:20px;
            display:flex;
            justify-content:center;
            margin-left:4px;
            padding:0;
            margin:0;
            li{

                line-height:20px;
                margin:0 15px;
                list-style:none;   
            }
        }
        .login{
            justify-content:flex-end;
            display:flex;
            flex:1;
            font-size:12px;
            p{
                margin:0 3px;
            }
        }
    }

`
export{
    HeaderWrap
}
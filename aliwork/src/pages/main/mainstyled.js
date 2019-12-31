import styled from 'styled-components'

const MainWrap = styled.div`
    position:relative;
   .ifnot{
        height:300px;
        width:490px;
        position:absolute;
        z-index:2;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        h4{
            line-height:56px;
            color:#ffffff;
            font-size:54px;
        }
        p{
            line-height:48px;
            font-size:34px;
            color:#ffffff;
            margin-bottom:38px;
        }
        .searchbox{
            width:100%;
            height:60px;
            .opacity{
                width: 100%;
                height: 60px;
                background: #fff;
                position:absolute;
                z-index:-1;
                opacity: 0.1;
            }
            .search{
                width: 100%;
                height: 40px;
                display:flex;
                padding:10px;
                .inputbox{
    
        
                    height:40px;
                    width:368px;
                    display:flex;
                    background:white;
                    border-radius:3px;
                    align-items:center;
                    justify-content:center;
                    input{
                        height:20px;
                        width:340px;
                        border-style:none;
                        outline:none;
                    }
                }
                span{
                    margin-left:10px;
                    border-radius:3px;
                    background-color:orange;
                    color:#fff;
                    height: 40px;
                    width:92px;
                    text-align:center;
                    line-height:40px;
                }
            }
            
        }
        ul{
            display:flex;
            margin-top:10px;
            font-size:12px;
            color:#fff;
            li{
                margin-right: 10px;
            }

        }
   }
   img{
       width:100%;
   }
`
export{
    MainWrap
}
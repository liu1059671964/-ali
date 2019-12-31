import styled from 'styled-components'

const ListWrap = styled.div`
       height:300px;
     width:850px;
     background:#fff;
     margin:32px 10px 32px 42px;
    .top{
        border-bottom:1px solid #eee;
        width:850px;
      height:50px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      span{
          font-size:14px;
          margin-left:14px;
        
      }
      p{
        font-size:14px;
          margin-right:14px;

      }
    }
    .bot{
        position:relative;
        height:248px;
        overflow:hidden;
        width:100%;
        ul{
        padding:0;
        margin-top:1px;
        height:248px;
        width:880px;
        position:absolute;
        top:0;
        overflow:hidden;
        overflow-y:scroll;
            li{
                font-size:14px;
            display:flex;
            height:50px;
            justify-content:space-between;
            margin:0 14px;
            span{
                width:400px;
                    line-height:50px;
                    color:#3C99D8;
            } 
            h3{
                width:50px;
                font-weight:200;
                line-height:50px;
                font-size:14px;
                color:rgba(0,0,0,0.6);
            }
            h4{
                width:80px;
                font-weight:normal;
                line-height:50px;
                color:#ccc;
            }
            
            }
        } 
    }
   
`
export{
    ListWrap
}
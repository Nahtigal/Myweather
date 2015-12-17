  <script type="text/javascript"/>
            
          function equation(a,b,c){
                var rez,d,x1,x2;
                d=D(a,b,c);
                if (d>=0)
                 {
                  x1=(-1*b+d^0,5)/2*a;
                   x2=(-1*b+d^0,5)/2*a;
                    rez="Корінь 1 =" + x1 + "Корінь 2 =" + x2;
                 }
                else
                 {
                  rez = "Корені відсутні";   
                 }
          }
            function D(a,b,c){
                var result=b^2-4*a*c;
                return result;
            }
      
      
            
            

using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace corefirst.Controllers
{
    //[Route("xxxx")]
    //[Route("[controller]")]
    //[Route("[controller]/["action"]")]
    //http webapi选择这种
    //[Route("v2/[controller]/["action"]")]
    public class AboutController
    {
        //[Route("abc")]
        public string Me()
        {
            return "Dave";
        }
        public string Company()
        {
            return "No Compay";
        }
    }
}

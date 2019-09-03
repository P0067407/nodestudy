using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace corefirst
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<IWelcomeService, WelcomeService>();//单列模式
            //services.AddTransient<IWelcomeService, WelcomeService>();//每次请求都创建
            //services.AddScoped<IWelcomeService, WelcomeService>();//每次http请求都创建
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });


            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(
            IApplicationBuilder app,
            IHostingEnvironment env,
            IConfiguration configuration,
            IWelcomeService welcomeService,
            ILogger<Startup> logger
            
            )
        {
            //服务注册和管道 
            var welcome = configuration["Welcome"];
            Console.WriteLine(welcome);
            var ws = welcomeService.getMessage();
            Console.WriteLine(ws);

            //app.UseWelcomePage();
            #region 中间件使用
            //app.Use(next =>
            //{
            //    return async httpContext =>
            //    {
            //        if (httpContext.Request.Path.StartsWithSegments("/first"))
            //        {
            //            await httpContext.Response.WriteAsync("First!!!");
            //        }
            //        else
            //        {
            //            logger.LogInformation("---next(xxxx)----");
            //            await next(httpContext);
            //        }
            //    };
            //});
            //app.UseWelcomePage(new WelcomePageOptions { Path="/welcome"});
            #endregion



            //app.UseWelcomePage(new WelcomePageOptions { Path = "/welcome" });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();

            app.UseMvc(builder =>
            {
                builder.MapRoute("Default", "{controller}/{action}/{id?}");
            });
        }
    }
}

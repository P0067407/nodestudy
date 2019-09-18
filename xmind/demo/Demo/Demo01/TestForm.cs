using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Demo01
{
    public partial class TestForm : Form
    {
        public TestForm()
        {
            InitializeComponent();
        }

        private void Button1_Click(object sender, EventArgs e)
        {

            //System.Windows.Forms.MessageBox.Show("Hello World!");
            var path = "D:\\code\\nodestudy\\xmind\\demo\\Demo\\Demo01\\00.xlsx";
            //var app = new Microsoft.Office.Interop.Excel.Application();
            //var wbs = app.Workbooks;
            //System.Windows.Forms.MessageBox.Show("Hello World!");
            //var wb = wbs.Add(path);
            //System.Windows.Forms.MessageBox.Show("Hello World!");

            //wb.Activate();
            //Globals.ThisAddIn.Application.ActiveWorkbook.FullName;
            Globals.ThisAddIn.Application.Workbooks.Add(path);
        }
    }
}

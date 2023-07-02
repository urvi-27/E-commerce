import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { RegistercomponentComponent } from './registercomponent/registercomponent.component';
import { HomepagecomponentComponent } from './homepagecomponent/homepagecomponent.component';
import { WomentopcomponentComponent } from './womentopcomponent/womentopcomponent.component';
import { Top1componentComponent } from './top1component/top1component.component';
import { ReviewcomponentComponent } from './reviewcomponent/reviewcomponent.component';
import { Top2componentComponent } from './top2component/top2component.component';
import { Top3componentComponent } from './top3component/top3component.component';
import { Top4componentComponent } from './top4component/top4component.component';
import { WomenjeanscomponentComponent } from './womenjeanscomponent/womenjeanscomponent.component';
import { Jeans1componentComponent } from './jeans1component/jeans1component.component';
import { Jeans2componentComponent } from './jeans2component/jeans2component.component';
import { Jeans3componentComponent } from './jeans3component/jeans3component.component';
import { Jeans4componentComponent } from './jeans4component/jeans4component.component';
import { WomensweatpantscomponentComponent } from './womensweatpantscomponent/womensweatpantscomponent.component';
import { Pants1componentComponent } from './pants1component/pants1component.component';
import { Pants2componentComponent } from './pants2component/pants2component.component';
import { Pants3componentComponent } from './pants3component/pants3component.component';
import { Pants4componentComponent } from './pants4component/pants4component.component';
import { WomensweatshirtcomponentComponent } from './womensweatshirtcomponent/womensweatshirtcomponent.component';
import { Sweatshirt1componentComponent } from './sweatshirt1component/sweatshirt1component.component';
import { Sweatshirt2componentComponent } from './sweatshirt2component/sweatshirt2component.component';
import { Sweatshirt3componentComponent } from './sweatshirt3component/sweatshirt3component.component';
import { Sweatshirt4componentComponent } from './sweatshirt4component/sweatshirt4component.component';
import { SizechartcomponentComponent } from './sizechartcomponent/sizechartcomponent.component';
import { Sizechart1componentComponent } from './sizechart1component/sizechart1component.component';
import { AddproductscomponentComponent } from './addproductscomponent/addproductscomponent.component';
import { AdminlogincomponentComponent } from './adminlogincomponent/adminlogincomponent.component';
import { UpdateproductscomponentComponent } from './updateproductscomponent/updateproductscomponent.component';
import { AdminhomecomponentComponent } from './adminhomecomponent/adminhomecomponent.component';
import { DeletecomponentComponent } from './deletecomponent/deletecomponent.component';
import { WomendresscomponentComponent } from './womendresscomponent/womendresscomponent.component';
import { Dress1componentComponent } from './dress1component/dress1component.component';
import { Dress2componentComponent } from './dress2component/dress2component.component';
import { Dress3componentComponent } from './dress3component/dress3component.component';
import { Dress4componentComponent } from './dress4component/dress4component.component';
import { WomenshortscomponentComponent } from './womenshortscomponent/womenshortscomponent.component';
import { Short1componentComponent } from './short1component/short1component.component';
import { Short2componentComponent } from './short2component/short2component.component';
import { Short3componentComponent } from './short3component/short3component.component';
import { Short4componentComponent } from './short4component/short4component.component';
import { MenstshirtcomponentComponent } from './menstshirtcomponent/menstshirtcomponent.component';
import { Tshirt1componentComponent } from './tshirt1component/tshirt1component.component';
import { Tshirt2componentComponent } from './tshirt2component/tshirt2component.component';
import { Tshirt3componentComponent } from './tshirt3component/tshirt3component.component';
import { Tshirt4componentComponent } from './tshirt4component/tshirt4component.component';
import { MenshirtcomponentComponent } from './menshirtcomponent/menshirtcomponent.component';
import { Shirt1componentComponent } from './shirt1component/shirt1component.component';
import { Shirt2componentComponent } from './shirt2component/shirt2component.component';
import { Shirt3componentComponent } from './shirt3component/shirt3component.component';
import { Shirt4componentComponent } from './shirt4component/shirt4component.component';
import { MensweatpantscomponentComponent } from './mensweatpantscomponent/mensweatpantscomponent.component';
import { Msweatpants1componentComponent } from './msweatpants1component/msweatpants1component.component';
import { Msweatpants2componentComponent } from './msweatpants2component/msweatpants2component.component';
import { Msweatpants3componentComponent } from './msweatpants3component/msweatpants3component.component';
import { Msweatpants4componentComponent } from './msweatpants4component/msweatpants4component.component';
import { MensweatshirtcomponentComponent } from './mensweatshirtcomponent/mensweatshirtcomponent.component';
import { Msweatshirt1componentComponent } from './msweatshirt1component/msweatshirt1component.component';
import { Msweatshirt2componentComponent } from './msweatshirt2component/msweatshirt2component.component';
import { Msweatshirt3componentComponent } from './msweatshirt3component/msweatshirt3component.component';
import { Msweatshirt4componentComponent } from './msweatshirt4component/msweatshirt4component.component';
import { MenjeanscomponentComponent } from './menjeanscomponent/menjeanscomponent.component';
import { Mjeans1componentComponent } from './mjeans1component/mjeans1component.component';
import { Mjeans2componentComponent } from './mjeans2component/mjeans2component.component';
import { Mjeans3componentComponent } from './mjeans3component/mjeans3component.component';
import { Mjeans4componentComponent } from './mjeans4component/mjeans4component.component';
import { MenshortcomponentComponent } from './menshortcomponent/menshortcomponent.component';
import { Mshort1componentComponent } from './mshort1component/mshort1component.component';
import { Mshort2componentComponent } from './mshort2component/mshort2component.component';
import { Mshort3componentComponent } from './mshort3component/mshort3component.component';
import { Mshort4componentComponent } from './mshort4component/mshort4component.component';

const routes: Routes = [
  {path:"login",component:LogincomponentComponent},
  {path:"register",component:RegistercomponentComponent},
  {path:"home",component:HomepagecomponentComponent},
  {path:"womentop",component:WomentopcomponentComponent},
  {path:"top1",component:Top1componentComponent},
  {path:"review",component:ReviewcomponentComponent},
  {path:"top2",component:Top2componentComponent},
  {path:"top3",component:Top3componentComponent},
  {path:"top4",component:Top4componentComponent},
  {path:"womenjeans",component:WomenjeanscomponentComponent},
  {path:"jeans1",component:Jeans1componentComponent},
  {path:"jeans2",component:Jeans2componentComponent},
  {path:"jeans3",component:Jeans3componentComponent},
  {path:"jeans4",component:Jeans4componentComponent},
  {path:"womensweatpants",component:WomensweatpantscomponentComponent},
  {path:"pants1",component:Pants1componentComponent},
  {path:"pants2",component:Pants2componentComponent},
  {path:"pants3",component:Pants3componentComponent},
  {path:"pants4",component:Pants4componentComponent},
  {path:"womensweatshirt",component:WomensweatshirtcomponentComponent},
  {path:"sweatshirt1",component:Sweatshirt1componentComponent},
  {path:"sweatshirt2",component:Sweatshirt2componentComponent},
  {path:"sweatshirt3",component:Sweatshirt3componentComponent},
  {path:"sweatshirt4",component:Sweatshirt4componentComponent},
  {path:"sizechart",component:SizechartcomponentComponent},
  {path:"sizechart1",component:Sizechart1componentComponent},
  {path:"addproducts",component:AddproductscomponentComponent},
  {path:"adminlogin",component:AdminlogincomponentComponent},
  {path:"updateproducts",component:UpdateproductscomponentComponent},
  {path:"adminhome",component:AdminhomecomponentComponent},
  {path:"deleteproducts",component:DeletecomponentComponent},
  {path:"womendress",component:WomendresscomponentComponent},
  {path:"dress1",component:Dress1componentComponent},
  {path:"dress2",component:Dress2componentComponent},
  {path:"dress3",component:Dress3componentComponent},
  {path:"dress4",component:Dress4componentComponent},
  {path:"womenshorts",component:WomenshortscomponentComponent},
  {path:"shorts1",component:Short1componentComponent},
  {path:"shorts2",component:Short2componentComponent},
  {path:"shorts3",component:Short3componentComponent},
  {path:"shorts4",component:Short4componentComponent},
  {path:"menstshirt",component:MenstshirtcomponentComponent},
  {path:"t-shirt1",component:Tshirt1componentComponent},
  {path:"t-shirt2",component:Tshirt2componentComponent},
  {path:"t-shirt3",component:Tshirt3componentComponent},
  {path:"t-shirt4",component:Tshirt4componentComponent},
  {path:"menshirt",component:MenshirtcomponentComponent},
  {path:"shirt1",component:Shirt1componentComponent},
  {path:"shirt2",component:Shirt2componentComponent},
  {path:"shirt3",component:Shirt3componentComponent},
  {path:"shirt4",component:Shirt4componentComponent},
  {path:"mensweatpants",component:MensweatpantscomponentComponent},
  {path:"msweatpants1",component:Msweatpants1componentComponent},
  {path:"msweatpants2",component:Msweatpants2componentComponent},
  {path:"msweatpants3",component:Msweatpants3componentComponent},
  {path:"msweatpants4",component:Msweatpants4componentComponent},
  {path:"mensweatshirt",component:MensweatshirtcomponentComponent},
  {path:"msweatshirt1",component:Msweatshirt1componentComponent},
  {path:"msweatshirt2",component:Msweatshirt2componentComponent},
  {path:"msweatshirt3",component:Msweatshirt3componentComponent},
  {path:"msweatshirt4",component:Msweatshirt4componentComponent},
  {path:"menjeans",component:MenjeanscomponentComponent},
  {path:"mjeans1",component:Mjeans1componentComponent},
  {path:"mjeans2",component:Mjeans2componentComponent},
  {path:"mjeans3",component:Mjeans3componentComponent},
  {path:"mjeans4",component:Mjeans4componentComponent},
  {path:"menshort",component:MenshortcomponentComponent},
  {path:"mshort1",component:Mshort1componentComponent},
  {path:"mshort2",component:Mshort2componentComponent},
  {path:"mshort3",component:Mshort3componentComponent},
  {path:"mshort4",component:Mshort4componentComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

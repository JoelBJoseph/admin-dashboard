import styles from './sidebar.module.css'
import {
    MdAnalytics,
    MdAttachMoney,
    MdDashboard, MdLogout,
    MdMiscellaneousServices, MdPeople,
    MdSupervisedUserCircle,
    MdWork
} from "react-icons/md";
import MenuLink from "@/app/ui/dashboard/sidebar/menuLink/menuLink";
import Image from "next/image";

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            },
            {
                title: "Customers",
                path: "/dashboard/customers",
                icon: <MdSupervisedUserCircle />
            },
            {
                title: "Services",
                path: "/dashboard/rightbar",
                icon: <MdMiscellaneousServices />
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney />
            },
        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork />
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics />
            },
            {
                title: "Staffs",
                path: "/dashboard/staffs",
                icon: <MdPeople />
            },
            {
                title: "Profits",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney />
            },
        ],
    },
]

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/noavatar.png" href="public/noavatar.png" height="50" width="50" alt='No avatar'></Image>
                <div className={styles.userDetail}>
                    <span className={styles.username}>Nabiel</span>
                    <span className={styles.userTitle}>Entrepreneur</span>
                </div>
            </div>
           <ul className={styles.list}>
               {menuItems.map(category => (
                   <li key={category.title}>
                       <span className={styles.cat}>{category.title}</span>
                       {category.list.map(item=>(
                           <MenuLink item={item} key={item.title}></MenuLink>
                       ))}
                   </li>
               ))}
           </ul>
            <button className={styles.logout}>
                <MdLogout />
                Logout
            </button>
            <div className={styles.logo}>
                <h2 id='logo'>solidServe™</h2>
            </div>

        </div>
    );
}

export default Sidebar
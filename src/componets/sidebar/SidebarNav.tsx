import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./navlink";
import { NavSession } from "./Navsession";

export function SidebarNav(){
    return(
        <Stack spacing="12" align="flex-start" >
        <NavSession title="GERAL">
               
                <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
                <NavLink icon={RiContactsLine} href="/users">Usuarios</NavLink>
        </NavSession>
        <NavSession title="AUTOMAÇÃO">
        <NavLink icon={RiGitMergeLine} href="Form">Formularios</NavLink>
                <NavLink icon={RiInputMethodLine} href="/Automação">Automação</NavLink>
        </NavSession>
    </Stack>
    )
}
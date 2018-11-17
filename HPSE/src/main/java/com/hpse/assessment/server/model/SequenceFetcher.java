package com.hpse.assessment.server.model;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SessionImplementor;
import org.hibernate.id.IdentifierGenerator;

public class SequenceFetcher implements IdentifierGenerator {

    public Serializable generate(SessionImplementor session, Object object)
            throws HibernateException {

        String prefix = "REQ";
        Connection connection = session.connection();
        try {
			System.out.println("Connection Established ------------------->"+connection.isClosed());
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			System.out.println("Exception While checking the Connection open");
		}
        PreparedStatement ps = null;
        try {

            ps = connection
                    .prepareStatement("SELECT nextval ('REQUEST_NUMBER_SEQ') as nextval"); 

            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                int id = rs.getInt("nextval");
                String code = prefix + id;
                System.out.println("code----------------------------------->"+code);
                return code;
            }

        } catch (SQLException e) {
            throw new HibernateException(
                    "Unable to generate ID");
        } finally {
            if (ps != null) {
                try {
                    ps.close();
                } catch (Throwable e) {
                    // log error, or rethrow exception
                }
            }
        }
        return null;
    }
    
    static void test()
    {
    	System.out.println("im coming to sequenceFetcher");
    }
}

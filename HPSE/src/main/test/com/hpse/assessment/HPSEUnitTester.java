package com.hpse.assessment.TestMethods;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import com.hpse.assessment.server.model.Requests;
import com.hpse.assessment.server.service.RequestMappingService;
import com.hpse.assessment.server.service.ShortestPathService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:test-spring-context.xml" })
@Transactional
public class TestMethods extends AbstractJUnit4SpringContextTests{
	@Autowired
	private Requests request;	
	@Autowired
	private ShortestPathService shortestPathService;
	@Autowired
	private RequestMappingService requestMappingService;
	@Test(expected=Exception.class)
		public String inputAnalyzer() {
		double [][] distance = new double[5][5];
		distance[0][1] = distance[1][0] =12;
		distance[0][2] = distance[2][0] =19;
		distance[0][3] = distance[3][0] =8;
		distance[0][4] = distance[4][0] =10;
		distance[1][2] = distance[2][1] =7;
		distance[1][3] = distance[3][1] =6;
		distance[1][4] = distance[4][1] =3;
		distance[2][3] = distance[3][2] =4;
		distance[2][4] = distance[4][2] =2;
		distance[3][4] = distance[4][3] =20;
			//User to Provide Inputs
		String shortestPath = shortestPathService.inputAnalyzer(distance, 5, 0);
			return shortestPath;
		}
		
		@Test
		public void saveRequests() {
			//User to Provide Inputs
			Requests request = null;
			requestMappingService.saveRequests(request);
			assertNotNull("Issue in input Request data");
		}
	}
package com.hpse.assessment.server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hpse.assessment.server.model.Requests;
import com.hpse.assessment.server.repository.RequestRepository;

@Service
public class RequestMappingService {
	
	@Autowired
	private RequestRepository requestRepository;
	
	@Autowired
	private ShortestPathService shortestPathService;
	
	public List<Requests> getRequestList()
	{
		List<Requests> objRequest = requestRepository.findAll();
		return objRequest;
	}
	
	public Requests saveRequests(Requests objInputRequest) {
		// TODO Auto-generated method stub
		
		Requests objRequest = new Requests();
		System.out.println(objInputRequest.getRequestSubmissionDate());
		System.out.println(objInputRequest.getNoOfCities());
		System.out.println(objInputRequest.getMatrix().length);
		objRequest.setShortestPath(shortestPathService.inputAnalyzer(objInputRequest.getMatrix(),objInputRequest.getNoOfCities().intValue(),objInputRequest.getOriginCity().intValue()));
		objRequest.setRequestSubmissionDate(objInputRequest.getRequestSubmissionDate());
		objRequest.setNoOfCities(objInputRequest.getNoOfCities());
		return requestRepository.save(objRequest);
	}


}

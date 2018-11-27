package com.hpse.assessment.server.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hpse.assessment.server.model.Requests;
import com.hpse.assessment.server.model.SequenceId;
import com.hpse.assessment.server.service.RequestMappingService;


@Controller
public class HPSEController {

	private static final Logger LOGGER = LoggerFactory.getLogger(HPSEController.class);

	
	@Autowired
	private RequestMappingService requestService;
	
	@RequestMapping("/")
    public String getIndexPage(){
    	System.out.println("hi");
        return "hpse";
    }
	/*
	 * This will fetch all the commands from the COMMANDS table and display the
	 * same in UI for Admin Home Screen
	 */
	@RequestMapping(value = "/allrequests", method = RequestMethod.GET)
	public @ResponseBody List<Requests> getAllRequests() {
		return requestService.getRequestList();
	}
	
	/*
	 * This method will be called on Click of Edit SpecificCommands/on Click of
	 * Add PseudoCommands/On Click of Add New SpecificCommands from Admin
	 * screen. It will the Update/Insert Commands, Specificcommands,
	 * CommandProductMapping and Parameters
	 */
	@RequestMapping(value = "/request", method = RequestMethod.POST)
	@Transactional
	public @ResponseBody Requests saveRequestDetails(
			@RequestBody Requests requestConditions) {
		Requests objRequest = new Requests();
		SequenceId sequence =requestService.findandupdate("hosting");
		requestConditions.setRequestDetailsId("REQ"+sequence.getSeq());
		objRequest = requestService.saveRequests(requestConditions);
		LOGGER.debug("RequestNumber "+objRequest.getRequestDetailsId());
		return objRequest;
	}

}